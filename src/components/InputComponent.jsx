import PropTypes from 'prop-types';

export default function InputComponent({ screenMode, label, name, type, placeholder, value, onChange }) {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-2">
            <label
                htmlFor={name}
                className={`text-sm font-semibold ${
                    screenMode === 'dark' ? 'text-white' : 'text-secondary'
                }`}
            >
                {label}
            </label>
            <input
                type={type}
                className="w-full pl-3 h-12 rounded-lg border-2 border-slate-100"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

InputComponent.propTypes = {
    screenMode: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};