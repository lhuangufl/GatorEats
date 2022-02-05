package user

import (
	"encoding/json"
	"net/http"

	"github.com/go-sql-driver/mysql"
	"goapp/dbConnection"
)

func UserRegisterHandler(writer http.ResponseWriter, request *http.Request) {
	var profile UserProfile

	decoder := json.NewDecoder(request.Body)
	if err := decoder.Decode(&profile); err != nil {
		writer.WriteHeader(http.StatusBadRequest)
		return
	}

	if profile.UserID == "" || profile.Passcode == "" {
		writer.WriteHeader(http.StatusBadRequest)
		return
	}

	if err := UserRegister(&profile); err != nil {
		mysqlErr, ok := err.(*mysql.MySQLError)
		if ok && mysqlErr.Number == 1062 {
			writer.WriteHeader(http.StatusConflict)
		} else {
			writer.WriteHeader(http.StatusInternalServerError)
		}
	}
}

func UserRegister(profile *UserProfile) error {
	return dbConnection.DB.Create(&profile).Error
}
