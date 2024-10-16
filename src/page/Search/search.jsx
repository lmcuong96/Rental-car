import "./search.scss"
import {SearchForm} from "./search-form/search-form.jsx";
import {MiniNav} from "../Root/nav-bar/mini-nav/mini-nav.jsx";
import {SelectOption} from "./select-option/select-option.jsx";
import {CarItems} from "./car-items/car-items.jsx";
import {Pagination} from "./pagination/pagination.jsx";
import {bookingCar} from "../../../database/booking-car.js";

export function Search() {
    const searchForm = SearchForm();
// console.log(searchForm.searchVal);

    const selectOption = SelectOption();

    const carItems = CarItems();
    const pagination = Pagination();

    const miniNav = [
        {content: "Home", link: "/search"},
        {content: "Search Results", link: "/search-results"}
    ]
    return (<>
            <div className={"mini-nav-123"}>
                {miniNav.map((nav, index) =>
                    <MiniNav key={index} contents={nav.content} links={nav.link}/>
                )}
            </div>
            <div className="bg-1 text-light text-start px-4 py-4 ">
                {searchForm.render()}

            </div>
            <div className="content-header-345 px-4 py-2">
                <h1>Search Results</h1>
                <div className={"select-option-123"}>
                    <p>There're {bookingCar.length} cars that are avalaible for your</p>
                    {selectOption.render()}
                </div>
                {/*Car - items*/}
                {bookingCar.map((items,) => <div key={items.id}
                                                 className={"car-items-container-435"}>{carItems.render(items)}</div>)}

                <div>
                    {pagination.render()}
                </div>
            </div>

        </>

    )
}
