## How to activate environment:

Multiple processes associated with the Diverse Data Hub require the use of a common environment for reproduciblity. For this reason, we've provided a `renv` and a `conda` environment.

### Python dependencies and `conda` environment

The following Python packages are used in various analyses and must be installed to render the Quarto website:

```python

# Adding Data Sets From the Diverse Data Hub for All Analysis:

import diversedata as dd

# For `Women's March Madness`:

import pandas as pd
import statsmodels.api as sm
import statsmodels.formula.api as smf
import altair as alt
import numpy as np
from scipy import stats
from IPython.display import Markdown

# For `Wildfire`:

import numpy as np
import pandas as pd
import altair as alt
import plotly.express as px
from sklearn.model_selection import train_test_split
from sklearn.compose import make_column_transformer
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LogisticRegression 
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import (
    f1_score,
    precision_score,
    recall_score,
    ConfusionMatrixDisplay,
    confusion_matrix,
    classification_report
)
from sklearn.dummy import DummyClassifier
from IPython.display import Markdown

# For `How Couples Meet and Stay Together`:

import diversedata as dd
import pandas as pd
import numpy as np
import statsmodels.api as sm
import statsmodels.formula.api as smf
import altair as alt
from IPython.display import Markdown
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression 
from sklearn.preprocessing import OrdinalEncoder
from sklearn.metrics import (
    ConfusionMatrixDisplay,
    confusion_matrix,
    classification_report
)
from sklearn.dummy import DummyClassifier

# For `Global Rights`:

import pandas as pd
import numpy as np
import altair as alt
import matplotlib.pyplot as plt
from sklearn.experimental import enable_iterative_imputer # no quality assurance
from sklearn.impute import IterativeImputer
from IPython.display import Markdown

# For `Indigenous Business`:

import numpy as np
import pandas as pd
import altair as alt
import plotly.express as px
from scipy.stats import chi2_contingency
from sklearn.cluster import DBSCAN
from IPython.display import Markdown

# For `Gender Assessment`:

import pandas as pd
import altair as alt
import statsmodels.formula.api as smf
from scipy.stats import shapiro, levene, kruskal
import scikit_posthocs as sp
from IPython.display import Markdown

```

#### To use the `conda` environment included in this repository 

**1. Clone the repository**

Using your shell terminal:

```bash
git clone git@github.com:diverse-data-hub/diverse-data-hub.github.io.git
cd diverse-data-hub.github.io
```

**2. Create the Conda environment from environment.yml**

```bash
conda env create --file environment.yml
```

This reads the YML file and installs all required packages.

**3. Activate the environment**

```bash
conda activate diverse_web_env
```

**Optional** - To Add New Dependencies

To add a new dependency to the `conda` environment, use `conda install` or `pip install`.

```bash
conda install new_dependency
# or
pip install new_dependency
```

Check the installed version using:

```bash
conda list -f new_dependency
```

Manually add the dependency and its version to the `environment.yml` file to ensure reproducibility.

Alternatively, you can run:

```bash
conda env export -f environment.yml --from-history
```

However, this command will not preserve the existing documentation in the `environment.yml` file and will not include packages that were installed via `pip`.


### R dependencies and `renv` environment

The following R packages are used in various analyses and must be installed to render the Quarto website:

```r

# Adding Data Sets From the Diverse Data Hub for All Analysis:

library(diversedata)

# For `Women's March Madness`:

library(tidyverse)
library(AER)
library(broom)
library(knitr)
library(MASS)

# For `Wildfire` (Additional to what's listed above)

library(lubridate)
library(gt)
library(ggmap)
library(ggspatial)
library(sf)
library(terra)
library(maptiles)
library(viridis)
library(marginaleffects)
library(broom)
library(kableExtra)
library(leaflet.extras)

# For `How Couples Meet and Stay Together` (Additional to what's listed above)

library(scales)
library(cowplot)
library(brant)
library(knitr)

# For `Global Rights` (Additional to what's listed above)

library(tidyverse)
library(VIM)
library(gridExtra)
library(mice)

# For `Indigenous Business` (Additional to what's listed above)

library(infer)
library(dbscan)
library(leaflet)
library(treemapify)

# For `Gender Assessment` (Additional to what's listed above)

library(janitor)
library(car)
library(ggthemes)
library(FSA)

```

#### To use the `renv` environment included in this repository 

**1. Launch RStudio from the conda environment**

First follow the above conda instructions. 
From the shell terminal with `diverse_web_env` activated and 
within the `diverse-data-hub.github.io` folder:

```bash
open -a RStudio . 
```

**2. Open the R project**

Open the `.Rproj` file in RStudio if it is not already loaded. 

Make sure your working directory is set to the project root.


**2.5. Create a GitHub PAT and add it to .Renviron**

On GitHub, create a Personal Access Token (PAT). More information found [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).
Create a file in the project root called `.Renviron` and add your PAT:
```R
GITHUB_PAT=<YOUR_PAT_HERE>
```
This step should be removed when the diversedata package is available on CRAN. 

**3. Ensure installation of `renv` package**

If the library `renv` is not installed run the following line in the R console. If already installed, skip to the next step:

```R
install.packages("renv")  
```

**4. Restore the project environment**

Restore the environment (already created with `renv::init()`) in the R console:

```R
renv::restore()
```

This installs the correct package versions from renv.lock.

In case this step throws an error like `Error: This project does not contain a lockfile.`, try the following command to restore the environment:

```R
renv::snapshot()
```

Following the command, restart your R session and retry the `renv::restore()` command.

**5. Confirm renv status**

Close up the R project and reopen it. Check that your environment matches the lockfile and everything is synced running the following in your R console:

```R
renv::status()
```

You should see a message like: *No issues found - the project is in a consistent state.*

**Optional** - To Add New Dependencies

If you add new R packages to a new notebook, run in the R console with the R project opened and the environment restored:

```r
renv::snapshot()
```

**Optional** - To Update Dependencies

1. Open your R project (with renv already initialized)

2. Update the package using either renv::update() or install.packages():

```r
renv::update("packageName")
```

3. Regenerate the lockfile
After the package is updated, regenerate the lockfile:

```r
renv::snapshot()
```

This writes the new package version and source into the renv.lock file, so others can install the exact same version.

**Optional** - To Clean Dependencies

To see which packages are installed but are not used, run in the R console with the R project opened and the environment restored:

```r
renv::clean()
```

This identifies unused packages and offers to remove them.
