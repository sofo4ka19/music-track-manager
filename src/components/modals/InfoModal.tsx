import BaseModal from "./BaseModal";
import { ModalProps } from "./BaseModal";
import { TrackItemProps } from "../TrackItem";
import InputInfo from "../InfoInput";
import MultipleSelector from "../MultipleSelector";
import { useGenres } from "../context/GenresContext";
import { useState, useEffect } from "react";

interface InfoModalProps{
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    initialData?: TrackItemProps;
}
const InfoModal = ({isOpen, onClose, onSave, initialData}:InfoModalProps) => {
    const genres  = useGenres();
    const [genresState, setGenresState] = useState<string[]>([]);
    useEffect(() => {
        if (initialData?.genres) {
          setGenresState(initialData.genres);
        }
      }, [initialData]);
    return(
        <BaseModal isOpen={isOpen} onClose={onClose} onSave={onSave} title={initialData ? "Edit track info" : "Create track"}>
            <InputInfo title="Title" value={initialData?.title}/>
            <InputInfo title="Artist" value={initialData?.artist}/>
            <InputInfo title="Album" value={initialData?.album}/>
            <InputInfo title="Cover image" value={initialData?.coverImage}/>
            <MultipleSelector selected={genresState}
  onChange={setGenresState}
  allGenres={genres}/>
        </BaseModal>
    )
}
export default InfoModal