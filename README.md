# Rest API with Express and TypeScript

Deploy✨ https://ts-express-camilog90.up.railway.app/api/diaries

## Routes

- GET
	> /api/diaries
	
	> /api/diaries/:id

- POST
	> /api/diaries

## Example body

```typescript
enum Weather {
	Sunny = 'sunny',
	Rainy = 'rainy',
	Cloudy = 'cloudy',
	Snowy = 'snowy',
	Windy = 'windy',
	Thunderstorm = 'thunderstorm',
	Stormy = 'stormy'
}
enum Visibility {
	Great = 'great',
	Good = 'good',
	Ok = 'ok',
	Poor = 'poor'
}
```

```json
{
    "date": "2017-04-15",
    "weather": "cloudy",
    "visibility": "good",
    "comment": "something"
}
```
