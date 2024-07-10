import PropTypes from 'prop-types';

export default function CustomButton({ screenMode, text }) {
    return (
        <button className={`w-auto h-auto flex items-center justify-center ${screenMode === 'dark' ? 'bg-primary text-secondary' : 'bg-primary text-black'} rounded-lg px-5 py-3 font-semibold uppercase hover:scale-110 transition-all`}>
            {text}
        </button>
    );
}

CustomButton.propTypes = {
    screenMode: PropTypes.string,
    text: PropTypes.string,
};
