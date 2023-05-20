import { Checkbox } from "../../checkbox";
import { Heading } from "../../typography";
import { FilterBoxWrapper } from "../styled";

function FilterBox({ title = "", options, ...props }) {
    return (
        <FilterBoxWrapper {...props}>
            <Heading
                level={6}
                className="body--xl font-weight-bold neutral-color-100 mt-2 mb-1"
            >
                {title}
            </Heading>

            <Checkbox
                name="male"
                icon={
                    <p
                        style={{
                            display: "inline-block",
                            backgroundColor: "red",
                            borderRadius: "50%",
                            width: "15px",
                            height: "15px",
                        }}
                    ></p>
                }
            >
                <p>Red</p>
            </Checkbox>
        </FilterBoxWrapper>
    );
}

export default FilterBox;
