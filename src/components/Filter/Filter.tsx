import { FC, MouseEvent } from 'react';
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Filter.module.scss";

const Filter : FC <{onFilter : (filter: string) => void}> = (props) => {

    const filters = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Active"
        },
        {
            id: 3,
            name: "Completed"
        }
    ];

    const filterHandler = (e: MouseEvent) => {
        const button: HTMLButtonElement = e.target ! as HTMLButtonElement;
        const btnList = document.querySelectorAll(`.${classes["filter__btn"]}`)
        btnList.forEach(btn => {
            btn.classList.remove(classes["filter__btn--active"])
        })
        button.classList.add(classes["filter__btn--active"]);
        
        if(button.dataset.filter) props.onFilter(button.dataset.filter);
    }

    return (
        <div className={classes["filter"]}>
            <Wrapper>
                <div className={classes["filter__filters-box"]} onClick={filterHandler}>
                    {
                        filters.map((filter:{id: number, name:string}) =><button key={filter.id} id={`filter-${filter.id}`} data-filter={filter.name}className={classes["filter__btn"]}>{filter.name}</button>)
                    }
                </div>
            </Wrapper>
        </div>
    )
} 

export default Filter;