import os
import numpy as np

path = './buildings'

files = os.listdir(path)

for f in files:
    name = []
    child = './buildings/' + f
    childFile = os.listdir(child)
    if(childFile != './buildings/text.txt'):
        for c in childFile:
            name.append('import '+c+" from './"+c+"'")
    print(f)

    filesName = []

    for c in childFile:
        filesName.append(
            'const ' + c + ' = React.lazy(() => import("./'+c+'"));')

    print(filesName)

    filesName = np.array(filesName)

    np.savetxt("./buildings/"+f+"/"+f+".txt", filesName, fmt='%s')
