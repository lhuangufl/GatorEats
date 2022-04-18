package api

import (
	"bytes"
	"fmt"
	"goapp/packages/config"
	"net/http"
	"testing"
)

func TestCheckout(t *testing.T) {
	url := fmt.Sprintf("http://127.0.0.1%s/api/checkout", config.Config[config.SERVER_PORT])
	client := &http.Client{
		CheckRedirect: func(req *http.Request, via []*http.Request) error {
			return http.ErrUseLastResponse
		},
	}
	req, _ := http.NewRequest("POST", url, bytes.NewReader([]byte{}))
	req.Header.Set("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		t.Fatalf("TestCreateOrder, err: %s", err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusSeeOther {
		t.Errorf("TestCreateOrder, code: %d", resp.StatusCode)
	}
}
