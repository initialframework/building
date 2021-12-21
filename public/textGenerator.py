import os
import numpy as np

path = './buildings'

files = os.listdir(path)

for f in files:
    name = []
    filesName = []
    child = './buildings/' + f
    childFile = os.listdir(child)
    # if(childFile != './buildings/text.txt'):
    #     for c in childFile:
    #         name.append('import '+c+" from './"+c+"'")
    for c in childFile:
        filesName.append('npx gltfjsx ' + c)

    print(filesName)

    # files = os.listdir(childFile)

    # for f in files:
    #     filesName.append('npx gltfjsx '+f)

    # print(filesName)

    filesName = np.array(filesName)

    np.savetxt("./Buildings/" + f + "/text.txt", filesName, fmt='%s')
