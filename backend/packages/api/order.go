package api

import (
	"database/sql"
	"goapp/packages/db"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

type Order struct {
	OrderId    int64  `json:"orderId"`
	OwnerId    int64  `json:"ownerId"`
	TotalPrice int64  `json:"totalPrice"`
	CreatedAt  string `json:"createdAt"`
	UpdatedAt  string `json:"updatedAt"`
}

func CreateOrder(c *fiber.Ctx, dbConn *sql.DB) error {
	r := new(Order)

	if err := c.BodyParser(r); err != nil {
		return err
	}

	_, err := dbConn.Query(db.CreateOrder, r.OrderId, r.OwnerId, r.TotalPrice)
	if err != nil {
		return err
	}
	return c.JSON(&fiber.Map{"success": true})
}

func UpdateOrder(c *fiber.Ctx, dbConn *sql.DB) error {
	r := new(Order)

	if err := c.BodyParser(r); err != nil {
		return err
	}

	_, err := dbConn.Query(db.UpdateOrder, r.TotalPrice, r.OrderId, r.OwnerId)
	if err != nil {
		return err
	}
	return c.JSON(&fiber.Map{"success": true})
}

func DeleteOrder(c *fiber.Ctx, dbConn *sql.DB) error {
	r := new(Order)

	if err := c.BodyParser(r); err != nil {
		return err
	}

	_, err := dbConn.Query(db.DeleteOrder, r.OrderId, r.OwnerId)
	if err != nil {
		return err
	}
	return c.JSON(&fiber.Map{"success": true})
}

func ListOrder(c *fiber.Ctx, dbConn *sql.DB) error {
	rows, err := dbConn.Query(db.ListOrder)
	if err != nil {
		return err
	}
	defer rows.Close()

	var resp []Order
	for rows.Next() {
		var order Order
		if err := rows.Scan(
			&order.OrderId, &order.OwnerId, &order.TotalPrice,
			&order.CreatedAt, &order.UpdatedAt,
		); err != nil {
			return c.Status(http.StatusInternalServerError).
				JSON(fiber.Map{"success": false, "error": err.Error()})
		}

		resp = append(resp, order)
	}

	return c.Status(http.StatusOK).JSON(resp)
}
