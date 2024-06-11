export const Title = ({title}) => {
    return (  
        <div className="relative text-2xl pl-3 font-semibold">
            <div className="absolute left-0 top-1 w-1 h-7 bg-red-600 rounded-full"></div>
            {title}
        </div>
    );
}
