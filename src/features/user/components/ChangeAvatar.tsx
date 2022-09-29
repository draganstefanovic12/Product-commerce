import { changeAvatar, removeAvatar } from "../../../api/userApi";
import { useMutation, useQueryClient } from "react-query";
import Button from "../../../components/Button";

const ChangeAvatar = () => {
  const queryClient = useQueryClient();

  const handleSubmit = (e: File): Promise<string> => {
    return changeAvatar(e);
  };

  const mutateUser = useMutation(handleSubmit, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  const removeMutate = useMutation(removeAvatar, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  return (
    <>
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
        className="w-max bg-gray-800"
      >
        Remove Avatar
      </Button>
    </>
  );
};

export default ChangeAvatar;
