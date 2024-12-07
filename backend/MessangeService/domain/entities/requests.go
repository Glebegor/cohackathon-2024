package entities

type Get10LastRequest struct {
	SenderId   string `json:"sender_id"`
	ReceiverId string `json:"receiver_id"`
	Message    string `json:"message"`
	Date       string `json:"date"`
}

type GetChatIdsRequest struct {
	SenderId    string `json:"sender_id"`
	AccessToken string `json:"access_token"`
}
