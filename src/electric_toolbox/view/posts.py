"""Parsing of the posts folder."""

from pathlib import Path

from electric_toolbox.common.files_management import list_folder_files
from electric_toolbox.markup.read_markdown import markdown_to_html_no_frontmatter as mkd_read


def read_posts(
    path: Path,
    folder: str = 'posts',
) -> None:
    """Read posts inside the content folder.

    Args:
        path (Path): The content folder path.
        folder (str): The folder to read the posts from.
    """
    posts = list_folder_files(path=path / folder)
    print(posts)

    posts.map(lambda _, d: mkd_read(d.contents))
