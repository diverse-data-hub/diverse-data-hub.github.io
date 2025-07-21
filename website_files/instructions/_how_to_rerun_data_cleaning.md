## Instructions to Re-Run Data Cleaning Process

**1. Clone the repository**

```bash
git clone git@github.com:diverse-data-hub/diverse-data-hub.github.io.git
cd diverse-data-hub.github.io
```

**2. Create the Conda environment from site-environment.yml**

```bash
conda env create --file site-environment.yml
```

This reads the YAML file and installs all required packages.

**3. Activate the environment**

```bash
conda activate mds_capstone_v1
```

**4. Launch Jupyter Lab**

```bash
jupyter lab
```

All data cleaning notebooks and associated narratives (`.ipynb`) are available through the `scripts/` folder to run in `jupyter lab`.
