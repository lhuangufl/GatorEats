package user

import (
	"testing"

	"github.com/go-sql-driver/mysql"
	dba "github.com/lhuangufl/GatorEats-CEN5035-Spring22/dbConnection"
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
					customerName: "name",
					phone:        "phone",
					city:         "city",
					state:        "state",
					country:      "country",
					postalCode:   100,
				},
				"pass",
			},
			false,
		},
		{
			"TestRegisterDuplicateName",
			args{
				UserProfile{
					customerName: "name",
					phone:        "phone",
					city:         "city",
					state:        "state",
					country:      "country",
					postalCode:   100,
				},
				"pass",
			},
			true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := UserRegister(tt.args.profile, tt.args.pass); (err != nil) != tt.wantErr {
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
