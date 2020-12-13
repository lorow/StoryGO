package book

import "context"


type Repository interface {
	GetBookEntry(ctx context.Context, uuid string) (*Book, error)
	CreateBook(ctx context.Context, bookData Book) (string, error)
	DeleteBook(ctx context.Context, uuid string) error
	UpdateBook(ctx context.Context, updateFn func(book *Book) (*Book, error)) error
}

