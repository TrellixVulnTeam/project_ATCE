import './Storage.css';

function Storage(props) {
	function findGoodById(itemId) {
		return props.goods.find((item) => {
			return item.id === itemId
		}).title
	}
	return (
		<div>
			<h2 className='title'>Склад</h2>

			<div>
				{props.storage.map((item) => {
					return (
						<span>
							{item.id}. { findGoodById(item.id)} - {item.qty} шт.
						</span>
					)
				})}</div>


		</div>
	);
}

export default Storage;
