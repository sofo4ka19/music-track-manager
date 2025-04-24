import { SelectDiv, FlexBetween, Tag, Icon, GenreSelect } from "./styles/styles";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface MultipleSelectorProps {
  selected: string[];
  onChange: (newSelected: string[]) => void;
  allGenres: string[];
}

const MultipleSelector = ({ selected, onChange, allGenres }: MultipleSelectorProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const availableGenres = allGenres.filter((genre) => !selected.includes(genre));

  const addGenre = (genre: string) => {
    onChange([...selected, genre]);
    setIsDropdownOpen(false);
  };

  const removeGenre = (genre: string) => {
    onChange(selected.filter((g) => g !== genre));
  };

  return (
    <SelectDiv data-testid="genre-selector">
      <FlexBetween $wrap>
        {selected.map((genre) => (
          <Tag key={genre}>
            {genre}
            <Icon onClick={() => removeGenre(genre)} >
              <X />
            </Icon>
          </Tag>
        ))}
        <Icon onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Plus />
        </Icon>
      </FlexBetween>

      {isDropdownOpen && (
        <GenreSelect>
          {availableGenres.map((genre) => (
            <div key={genre} onClick={() => addGenre(genre)}>
              {genre}
            </div>
          ))}
        </GenreSelect>
      )}
    </SelectDiv>
  );
};

export default MultipleSelector;
