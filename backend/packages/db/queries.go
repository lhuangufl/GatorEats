package db

const (
	CheckUserExists                 = `SELECT true from users WHERE email = $1`
	LoginQuery                      = `SELECT * from users WHERE email = $1`
	GetRestaurantByEmailQuery       = `SELECT * FROM restaurants WHERE owneremail = $1`
	UpdateUserPasswordQuery         = `UPDATE users SET password = $2 WHERE id = $1`
	DeleteUser                      = `DELETE FROM users WHERE email = $1`
	CreateUserQuery                 = `INSERT INTO users(id, name, password, email) VALUES (DEFAULT, $1 , $2, $3)`
	GetUserByIDQuery                = `SELECT * FROM users WHERE id = $1`
	GetUserByEmailQuery             = `SELECT * FROM users WHERE email = $1`
	CreateRestaurant                = `INSERT INTO restaurants(owneremail, password, name, zipcode, phone) VALUES ($1 , $2, $3, $4, $5)`
	GetAllRestaurantsQuery          = `SELECT owneremail, name, phone, zipcode FROM restaurants`
	GetAllRestaurantsQueryByZipCode = `SELECT owneremail, name, phone, zipcode FROM restaurants WHERE zipcode = $1`
	AddMenuItem                     = `INSERT INTO menuitem(ownerid, price, itemname) VALUES ($1, $2, $3)`
	GetMenuByOwnerId                = `SELECT m.itermid, r.restid, m.itemname, m.price, m.created_on, m.updated_at FROM restaurants as r, menuitem as m WHERE r.restid = m.ownerid and r.owneremail = $1`
	UpdateUserProfile               = `UPDATE users SET name = $1, email = $2 WHERE id = $3`
	UpdateVendorProfile             = `UPDATE restaurants SET owneremail = $1, name = $2, zipcode = $3, phone = $4 WHERE restid = $5`

	CreateOrder = `INSERT INTO gatororder(orderid, ownerid, totalprice) VALUES ($1, $2, $3)`
	UpdateOrder = `UPDATE gatororder SET totalprice = $1 WHERE orderid = $2 AND ownerid = $3`
	DeleteOrder = `DELETE FROM gatororder WHERE orderid = $1 AND ownerid = $2`
	ListOrder   = `SELECT * FROM gatororder`
)
