export const errorLoading = (err: any) => {
    throw new Error(
        "An error has occured" + err
    );
};