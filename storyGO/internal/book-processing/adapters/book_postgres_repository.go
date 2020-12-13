package adapters

import (
	"book-processing/domain/book"
	"fmt"
	"github.com/gofrs/uuid"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
	"time"
)

type BookPostgres struct {
	gorm.Model
	id 				  string
	title 			  string
	author            string
	Filepath          string
	FileName          string
	HasBeenDownloaded bool
	DownloadedAt      time.Time
	CreatedAt         time.Time
}

type PostgresBookRepository struct {
	bookFactory book.Factory
	db *gorm.DB
}

type DatabaseConnectionError struct {}

func (err DatabaseConnectionError) Error() string{
	return fmt.Sprintf("Could not connect to the database")
}

func NewPostgresqlBookRepository(factory book.Factory) (*PostgresBookRepository, error){
	repository := PostgresBookRepository{}
	db, err := repository.getGormDB()

	if err != nil{
		return nil, DatabaseConnectionError{}
	}

	repository.db = db
	repository.bookFactory = factory

	return &repository, nil
}

func (rep PostgresBookRepository) DeleteBook(book BookPostgres) error{
	err := rep.db.Delete(book, 1).Error
	return err
}

// Add unfinished book instance with UUID, return UUID
func (rep PostgresBookRepository) AddBasicBookInstance() (string, error)  {
	u1 := uuid.Must(uuid.NewV4()).String()
	newBook := rep.bookFactory.NewBook(u1)

	rep.db.Create(newBook)

	return u1, nil
}

func (rep PostgresBookRepository) getGormDB() (*gorm.DB, error) {
	return gorm.Open(postgres.Open(os.Getenv("database_url")), &gorm.Config{})
}