import PropTypes from 'prop-types';

export const FirstApp = ({ title, description }) => {

    return (
        <>
            <div data-testid='test-title'>{ title }</div>
            <h1 data-testid='test-title'>{ title }</h1>
            <p>{ description }</p>
        </>
    )

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}