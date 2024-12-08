package middleware

import (
	"bytes"
	"encoding/json"
	"hackathon-messages/bootstrap"
	"hackathon-messages/domain/entities"
	"net/http"

	"github.com/gin-gonic/gin"
)

func VerificationOfTheTokenMiddleWare(c *gin.Context, config *bootstrap.Config) {
	var input entities.VerifycationRequest

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		c.Abort()
		return
	}

	// send request to auth service
	authServiceURL := "localhost:" + config.Services_auth_port + "/api/v2/verify"

	jsonData, err := json.Marshal(input)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to marshal request data"})
		c.Abort()
		return
	}

	resp, err := http.Post(authServiceURL, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to send request to auth service"})
		c.Abort()
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		c.JSON(resp.StatusCode, gin.H{"error": "Invalid token"})
		c.Abort()
		return
	}
	c.Next()

}
