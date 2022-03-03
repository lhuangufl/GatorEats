package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"goapp/packages/config"
	"goapp/packages/db"
	"net/http"
	"testing"
)

func TestMain(m *testing.M) {
	config.InitConfig()
	go StartServer()
	m.Run()
}

func TestUserLogin(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1:%s/login", config.Config[config.SERVER_PORT])
	json, _ := json.Marshal(db.User{Email: "test@example.com"})
	r := bytes.NewReader(json)
	resp, err := http.Post(url, "application/json", r)
	if err != nil {
		t.Fatalf("TestLogin, req: %s, err: %s", string(json), err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestLogin, req: %s, code: %d", string(json), resp.StatusCode)
	}
}

func TestHome(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1:%s/home", config.Config[config.SERVER_PORT])
	resp, err := http.Get(url)
	if err != nil {
		t.Fatalf("TestHome, err: %s", err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestHome, status code: %d", resp.StatusCode)
	}
}

func TestRestaurantByZipCode(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1:%s/home?zipCode=11111", config.Config[config.SERVER_PORT])
	resp, err := http.Get(url)
	if err != nil {
		t.Fatalf("TestRestaurantByZipCode, err: %s", err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestRestaurantByZipCode, status code: %d", resp.StatusCode)
	}
}

func TestCreateRestaurant(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1:%s/restaurant", config.Config[config.SERVER_PORT])
	json, _ := json.Marshal(db.Restaurant{Rname: "name", Location: "location", Rating: 1, Rtype: "type", Phone: "1", ZipCode: 11111})
	r := bytes.NewReader(json)
	resp, err := http.Post(url, "application/json", r)
	if err != nil {
		t.Fatalf("TestCreateRestaurant, req: %s, err: %s", string(json), err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestCreateRestaurant, req: %s, code: %d", string(json), resp.StatusCode)
	}
}
