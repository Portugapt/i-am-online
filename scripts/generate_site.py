"""Script to generate website."""

from pathlib import Path

from jinja2 import Environment, PackageLoader

import electric_toolbox

WEBSITE_DIRECTORY: Path = Path('website')
electric_toolbox.clean_and_recreate(WEBSITE_DIRECTORY)


jinja_env = Environment(
    loader=PackageLoader('electric_toolbox', 'templates'),
    autoescape=True,
)

electric_toolbox.build_index(path=WEBSITE_DIRECTORY, j2_env=jinja_env)

electric_toolbox.read_posts(path=Path('content'), folder='posts')
