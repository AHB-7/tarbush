const CharacterCounter = ({ currentLength, maxLength }) => {
    return (
        <p className="text-sm text-gray-400">
            {currentLength}/{maxLength}
        </p>
    );
};
