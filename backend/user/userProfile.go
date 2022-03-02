package user

import "encoding/json"

type UserProfile struct {
	ID           int64  `gorm:"primaryKey"`
	UserID       string `gorm:"column:userID"`
	Passcode     string
	CustomerName string `gorm:"column:customerName"`
	Phone        string
	City         string
	State        string
	Country      string
	PostalCode   int `gorm:"column:postalCode"`
}

func (u *UserProfile) TableName() string {
	return "customers"
}

func (u *UserProfile) MarshalJSON() ([]byte, error) {
	type userProfile *UserProfile
	x := userProfile(u)
	x.Passcode = ""
	return json.Marshal(x)
}
