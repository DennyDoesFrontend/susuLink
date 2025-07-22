import SearchCard from "./SearchCard";
const susuMembers = [
  {
    name: "Kofi Manu",
    id: "12345678",
    imageLink: "selfie3.jpg"
  },
  {
    name: "Ama Serwaa",
    id: "87654321",
    imageLink: "selfie2.jpg"
  },
  {
    name: "Yaw Mensah",
    id: "11223344",
    imageLink: "selfie3.jpg"
  },
  {
    name: "Akua Badu",
    id: "44332211",
    imageLink: "selfie.jpg"
  },
  {
    name: "Kwame Asare",
    id: "99887766",
    imageLink: "photo.jpg"
  }
];

const FindAPerson = () => {
    return ( 
        <div className="min-w-96">
            <div className="bg-clWhite px-4 py-2 rounded-t-md shadow-[0px 0px 0.5px 0.2px rgba(0, 0, 0, 0.25)]">
                <h3 className="text-clText">Find a person</h3>
            </div>
            <div className="w-full bg-[#EBEFF4] flex items-center justify-center pt-4 pb-2">
                <input className="w-[90%] p-2 rounded-md border outline-none" type="text" placeholder="Enter name here" />
            </div>
            <div className="bg-[#EBEFF4] flex items-center gap-2 px-4 text-clText pb-4">
                <p className="text-sm">Search by: </p>
                <span className="text-xs py-[1px] px-4 border rounded-md bg-white cursor-pointer">Name</span>
                <span className="text-xs py-[1px] px-4 border rounded-md bg-white cursor-pointer">Index</span>
                <span className="text-xs py-[1px] px-4 border rounded-md bg-white cursor-pointer">Goal</span>
            </div>
            <div className="max-h-58 overflow-scroll rounded-b-md">
                {susuMembers.map( (profile)=> {return <SearchCard name={profile.name} id={profile.id} imageLink={profile.imageLink} />})}
            </div>
        </div>
     );
}
export default FindAPerson;
