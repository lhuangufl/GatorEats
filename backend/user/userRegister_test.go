package user

import (
	"testing"

	dba "goapp/dbConnection"

	"github.com/go-sql-driver/mysql"
)

func TestUserRegister(t *testing.T) {
	db, err := dba.OpenConnection()
	if err != nil {
		t.Errorf("get db, err: %s", err)
		return
	}

	if _, err := db.Exec("DELETE FROM `customers` WHERE `customerName` = ?", "name"); err != nil {
		t.Errorf("prepare testing data, err: %s", err)
		return
	}

	type args struct {
		profile UserProfile
		pass    string
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		{
			"TestRegister",
			args{
				UserProfile{
					CustomerName: "name",
					Phone:        "phone",
					City:         "city",
					State:        "state",
					Country:      "country",
					PostalCode:   100,
				},
				"pass",
			},
			false,
		},
		{
			"TestRegisterDuplicateName",
			args{
				UserProfile{
					CustomerName: "name",
					Phone:        "phone",
					City:         "city",
					State:        "state",
					Country:      "country",
					PostalCode:   100,
				},
				"pass",
			},
			true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := UserRegister(&tt.args.profile); (err != nil) != tt.wantErr {
				t.Errorf("UserRegister() error = %v, wantErr %v", err, tt.wantErr)
			}

			if err == nil {
				return
			}

			if mysqlErr, ok := err.(*mysql.MySQLError); !ok || mysqlErr.Number != 1062 {
				t.Errorf("unknown err, err: %s", err)
			}
		})
	}
}
