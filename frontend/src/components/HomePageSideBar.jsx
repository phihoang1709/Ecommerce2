import Dropdown from "./Dropdown";
const HomePageSideBar = () => {
    const contents = [
        {
            title:"Macbook Air",
            icon : "fa-solid fa-laptop",
            contents: ["Macbook Air 2022", "Macbook Air 2021", "Macbook Air 2020","Macbook Air 2019"],
            link: "/macbook"
        },
        {
            title:"Mac Desktop",
            icon : "fa-solid fa-laptop",
            contents:["iMac","Mac Mini"],
            link: "/macbook"
        },
         {
            title:"Macbook Pro",
            icon : "fa-solid fa-laptop",
            contents:["Macbook Pro 2022", "Macbook Pro 2021", "Macbook Pro 2020","Macbook Pro 2019"],
            link: "/macbook"
        },
        {
            title:"Macbook M Series",
            icon : "fa-solid fa-laptop",
            contents:["Macbook Pro M1","Macbook Pro M2","Macbook Air M1","Macbook Air M2"],
            link: "/macbook"
        },
        {
            title:"Iphone",
            icon : "fa-solid fa-mobile",
            contents:["Iphone 15 Series","Iphone 14 Series","Iphone 13 Series"],
            link:"/iphone"
        },
        {
            title:"Apple Watch",
            icon : "fa-solid fa-clock",
            contents:["Apple Watch Series 8","Apple Watch Series 7","Apple Watch Ultra"],
            link: "/watch"
        },
         {
            title:"Phụ kiện",
            icon : "a-solid fa-headphones",
            contents:["Bàn phím","Chuột"],
            link: "/others"
        },
        {
            title:"Khuyến mại",
            icon : "fa-brands fa-salesforce",
            contents: ["Iphone giá shock","Laptop LikeNew","Phụ kiện giá rẻ"],
            link: "/"
        }
    ];
    return (
        <div id="nav-hozi" className="col-md-3">
            <div className=" d-flex flex-column mt-5" role="group" aria-label="Basic example">
                {contents.map((content)=>{
                    return (<Dropdown key={content} title={content.title} icon={content.icon} items={content.contents} link={content.link}/>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePageSideBar;
