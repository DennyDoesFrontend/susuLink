import InnerButton from "./InnerButton";

const SearchCard = ({name, id, imageLink}) => {
    return (
        <div className="bg-clWhite flex item-center px-4 py-2 justify-between">
            <div className="flex gap-3 items-center">
                <img src={`/${imageLink}`} className="max-w-10 max-h-10 rounded-full" alt="profile" />
                <div>
                    <p className="text-xs text-clText">{name}</p>
                    <p className="text-xs text-clText">ID: {id}</p>
                </div>
            </div>
            <InnerButton text="View More" />
        </div>
    );
}
 
export default SearchCard;