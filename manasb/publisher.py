import subprocess
from pathlib import Path
import os
import sys

if __name__ == "__main__":
    cd = Path(os.getcwd()) 
    
    # get affected libs 
    out = subprocess.getoutput("yarn affected:libs --base=origin/master --plain")
    affectedLibs = [lib for lib in out.split("\n")[2].split(" ") if len(lib)]
    
    if len(affectedLibs) == 0:
        print("Nothing to publish. exiting....")
        sys.exit()
    
    # increment affected lib versions
    for lib in affectedLibs:
        os.system("yarn version --minor --cwd {}".format(str(cd.joinpath("libs/" + lib))))

    # build affected libs
    os.system("yarn affected:build --base=origin/master")

    # publish affected libs
    for lib in affectedLibs:
        os.system("yarn publish --cwd {}".format(str(cd.joinpath("dist/libs/" + lib))))
    
    # commit updated package.jsons
    for lib in affectedLibs:
        os.system("git add {}".format(str(cd.joinpath("libs/" + lib + "/package.json"))))

    os.system("git commit -m \"{}\"".format("Publish: {}".format(affectedLibs)))
        