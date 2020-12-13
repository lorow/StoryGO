package book

import (
	"fmt"
	"time"
)

type Book struct {
	id 				  string
	title 			  string
	author            string
	Filepath          string
	FileName          string
	HasBeenDownloaded bool
	DownloadedAt      time.Time
	CreatedAt         time.Time
}

type Factory struct {}

func NewFactory() (Factory, error) {
	return Factory{}, nil
}

// NewBook returns a pointer to a new book instance with given uuid
func (f Factory) NewBook(uuid string) *Book{
	return &Book{
		id:uuid,
	}
}

// validateTime validates if the download time is greater or equal to the creation time
func (f Factory) validateTime(createTime, downloadTime time.Time) error {

	if downloadTime.Before(createTime) {
		return TooEarlyHourError{createTime: createTime, downloadTime: downloadTime}
	}

	return nil
}

type TooEarlyHourError struct {
	createTime time.Time
	downloadTime time.Time
}

func (e TooEarlyHourError) Error() string{
	return fmt.Sprintf(
		"You can't download a book before it was created: %d, provided time: %s",
		e.createTime,
		e.downloadTime,
	)
}
