package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"goapp/packages/config"
	"net/http"
	"testing"
)

func TestCreateOrder(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1%s/api/order", config.Config[config.SERVER_PORT])
	reqBody, _ := json.Marshal(Order{OrderId: 1, OwnerId: 1, TotalPrice: 1})
	r := bytes.NewReader(reqBody)
	resp, err := http.Post(url, "application/json", r)
	if err != nil {
		t.Fatalf("TestCreateOrder, req: %s, err: %s", string(reqBody), err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestCreateOrder, req: %s, code: %d", string(reqBody), resp.StatusCode)
	}
}

func TestUpdateOrder(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1%s/api/order", config.Config[config.SERVER_PORT])
	reqBody, _ := json.Marshal(Order{OrderId: 1, OwnerId: 1, TotalPrice: 2})
	r := bytes.NewReader(reqBody)
	client := http.Client{}
	req, _ := http.NewRequest(http.MethodPut, url, r)
	req.Header.Set("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		t.Fatalf("TestCreateOrder, req: %s, err: %s", string(reqBody), err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestCreateOrder, req: %s, code: %d", string(reqBody), resp.StatusCode)
	}
}

func TestListOrder(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1%s/api/order", config.Config[config.SERVER_PORT])
	resp, err := http.Get(url)
	if err != nil {
		t.Fatalf("TestCreateOrder, err: %s", err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestCreateOrder, code: %d", resp.StatusCode)
	}
}

func TestDeleteOrder(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1%s/api/order", config.Config[config.SERVER_PORT])
	reqBody, _ := json.Marshal(Order{OrderId: 1, OwnerId: 1, TotalPrice: 1})
	r := bytes.NewReader(reqBody)
	client := http.Client{}
	req, _ := http.NewRequest(http.MethodDelete, url, r)
	req.Header.Set("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		t.Fatalf("TestCreateOrder, req: %s, err: %s", string(reqBody), err)
	}
	if resp.StatusCode != 200 {
		t.Errorf("TestCreateOrder, req: %s, code: %d", string(reqBody), resp.StatusCode)
	}
}
