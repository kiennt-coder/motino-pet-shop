import FilterBox from "./components/filterBox";
import { Heading } from "../index";
import { FilterBody, FilterHeader, FilterWrapper } from "./styled";

function FilterCategory() {
    return (
        <FilterWrapper>
            <FilterHeader className="mb-1">
                <Heading
                    level={5}
                    className="heading--xs font-weight-bold text-transform-capitalize"
                >
                    Filter
                </Heading>
            </FilterHeader>
            <FilterBody className="mt-3">
                <FilterBox title="Gender" options={[]} />
            </FilterBody>
        </FilterWrapper>
    );
}

export default FilterCategory;
