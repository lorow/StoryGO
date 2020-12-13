package models

import (
	"gorm.io/gorm"
)

type linkData struct {
	chapterID int
	linkType  string
}

type linkType struct {
	data linkData
	awd  string
	link string
}

// EpubEntry represents how the links should look like
type EpubEntry struct {
	gorm.Model
	links []linkType
	title string
	cover string
}
