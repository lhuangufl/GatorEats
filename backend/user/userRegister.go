package user

import (
	dba "github.com/lhuangufl/GatorEats-CEN5035-Spring22/dbConnection"
)

func UserRegister(profile UserProfile, pass string) error {
	db, err := dba.OpenConnection()
	if err != nil {
		return err
	}

	_, err = db.Exec("INSERT INTO `customers` "+
		"(passcode, customerName, phone, city, state, country, postalCode) values "+
		"(?,        ?,            ?,     ?,    ?,     ?,       ?)",
		pass, profile.customerName, profile.phone, profile.city, profile.state, profile.country, profile.postalCode,
	)

	return err
}
