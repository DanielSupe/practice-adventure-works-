import { Model } from 'sequelize'

export interface IUser extends Model {
	id: number
	name: string
	email: string
	password: string
	createdAt?: Date
	updatedAt?: Date
}

export interface IProduct extends Model {
	ProductKey: number
	ProductAlternateKey?: string
	ProductSubcategoryKey?: number
	WeightUnitMeasureCode?: string
	SizeUnitMeasureCode?: string
	EnglishProductName: string
	SpanishProductName: string
	FrenchProductName: string
	StandardCost?: number
	FinishedGoodsFlag: boolean
	Color: string
	SafetyStockLevel?: number
	ReorderPoint?: number
	ListPrice?: number
	Size?: string
	SizeRange?: string
	Weight?: number
	DaysToManufacture?: number
	ProductLine?: string
	DealerPrice?: number
	Class?: string
	Style?: string
	ModelName?: string
	LargePhoto?: string 
	EnglishDescription?: string
	FrenchDescription?: string
	ChineseDescription?: string
	ArabicDescription?: string
	HebrewDescription?: string
	ThaiDescription?: string
	GermanDescription?: string
	JapaneseDescription?: string
	TurkishDescription?: string
	StartDate?: Date
	EndDate?: Date
	Status?: string
}