import { changeAvatar, removeAvatar } from "../../../api/userApi";
import { useMutation, useQueryClient } from "react-query";
import Button from "../../../components/Button";

type AvatarProps = {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangeAvatar = ({ setIsEditing }: AvatarProps) => {
  const queryClient = useQueryClient();

  const handleSubmit = (e: File): Promise<string> => {
    return changeAvatar(e);
  };

  const mutateUser = useMutation(handleSubmit, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
      setIsEditing(false);
    },
  });

  const removeMutate = useMutation(removeAvatar, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
      setIsEditing(false);
    },
  });

  return (
    <div className="flex flex-col gap-1 mb-1">
      <input
        name="fileupload"
        accept="image/*"
        type="file"
        onChange={(e) => {
          e.currentTarget.files![0] &&
            mutateUser.mutate(e.currentTarget.files![0]);
        }}
      />
      <input name="fileupload" type="submit" id="submit" className="hidden" />
      <Button
        onClick={() => removeMutate.mutate()}
        className="shadow w-40 px-5 rounded text-sm font-normal"
      >
        Remove Avatar
      </Button>
    </div>
  );
};

export default ChangeAvatar;
