const CharacterCounter = ({ min, max, text = '' }) => {

    return (
        <div>
            <p
                style={{ color: 'gray', fontSize: '10px' }}
                >Caracteres mínimos: {min} - Caracteres máximos: {max}</p>
            <p
                style={{ fontSize: '12px', color: (text?.length < min || text?.length > max) ? 'red' : 'green' }}
            >
                {text?.length} caracteres
            </p>
        </div>
    );
};

export { CharacterCounter };