"""Utilies to move an object to a file."""


def string_to_file(
    path: str,
    file_name: str,
    contents: str,
) -> None:
    """Create a file with the contents string.

    Args:
        path (str): The path to the file.
        file_name (str): The file name (including extension)
        contents (str): The contents to dump into the file.
    """
    with open(f'{path}/{file_name}', 'w') as f:
        f.write(contents)
