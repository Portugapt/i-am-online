"""Build index for the webpage."""

from pathlib import Path

from jinja2 import Environment

from electric_toolbox.common.to_file import string_to_file


def build(
    path: Path,
    j2_env: Environment,
) -> None:
    """Build the index.

    Args:
        path (str): Path to the folder where the index will be stored.
        j2_env (Environment): The global jinja2 environment.
    """
    nav = j2_env.get_template('index/index.j2')
    contents = nav.render()

    string_to_file(
        path=path,
        file_name='index.html',
        contents=contents,
    )
