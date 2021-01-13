import './Cities.scss';

function Cities(props) {
	const cities = [{
		id: 1,
		title: 'Город1'
	},
	{
		id: 2,
		title: 'Город2'
	},
	{
		id: 3,
		title: 'Город3'
	},
	{
		id: 4,
		title: 'Город4'
	},
	{
		id: 5,
		title: 'Город5'
	}]

	// const currentCity = 1;

	return (

		<div className="city-list">

			{cities.map((city) => {
				return (
					<a className={'city ' + (props.currentCity === city.id ? 'active' : '')} href='google.com' onClick={() => {

						props.onChange(city.id)
					}}>{city.title}</a>

				);
			})}

		</div>
	);
}

export default Cities;
