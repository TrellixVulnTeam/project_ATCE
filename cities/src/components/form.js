import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherCall}>
                <input type="text" name='city' placeholder='Введите город' />
                <button> Обновить погоду</button>
            </form>

        );
    }
}

export default Form;
