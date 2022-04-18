package api

import (
	"database/sql"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/stripe/stripe-go/v72"
	"github.com/stripe/stripe-go/v72/checkout/session"
)

func Checkout(c *fiber.Ctx, dbConn *sql.DB) error {
	stripe.Key = "sk_test_51KpvuKGppzPdAf6wXK5cGQmmHzBNgNpOmzNXKwYCj8g7vCZnm2Vhf5IQo1gFQBnONUM551KEpCbM36DVBVEYgCU600yHh2gkxi"
	params := &stripe.CheckoutSessionParams{
		Mode: stripe.String(string(stripe.CheckoutSessionModePayment)),
		LineItems: []*stripe.CheckoutSessionLineItemParams{{
			PriceData: &stripe.CheckoutSessionLineItemPriceDataParams{
				Currency: stripe.String("usd"),
				ProductData: &stripe.CheckoutSessionLineItemPriceDataProductDataParams{
					Name: stripe.String("T-shirt"),
				},
				UnitAmount: stripe.Int64(2000),
			},
			Quantity: stripe.Int64(1),
		}},
		SuccessURL: stripe.String("https://example.com/success"),
		CancelURL:  stripe.String("https://example.com/cancel"),
	}
	s, _ := session.New(params)
	return c.Redirect(s.URL, http.StatusSeeOther)
}
