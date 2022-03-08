__path = process.cwd()
//var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "DaniGanz"
var neoxr = "yntkts"
var zeks = "administrator"
var zeks2 = "apivinz"
var danikey = "NisaaCantik"
var dapakey = "SayuBotz"
var leyscoders = "IkyOgiwara"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { TiktokDownloader } = require('../lib/tiktokdl.js')
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./../lib/anjay");

var {
  igStalk,
  igDownloader
} = require("./../lib/utils/igdown");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var {
  fbDownloader,
  fbdown2
} = require('./../lib/utils/fbdl');

//var TiktokDownloader = require('./../lib/tiktokdl');

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notgcname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcname'
        },
    notgcicon: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcicon'
        },
    notpp: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer pp'
        },
    notbg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer bg'
        },
    notmemberCount: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer memberCount'
        },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406, 
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: '404 ERROR'
    }
}

/*
Akhir Pesan Error
*/

//router.use(favicon(__path + "/views/favicon.ico"));

const listkey = ["VeanChan", "DaniChan", "DaniApi", "DaniTegal"];

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

//Game

router.get('/game/family100', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/family100.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkalimat', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkalimat.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkata', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkata.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakjenaka', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var pertanyaan = JSON.parse(
            fs.readFileSync(__path + '/data/tebakjenaka.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...pertanyaan[~~(Math.random() * pertanyaan.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkimia', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var nama = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkimia.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...nama[~~(Math.random() * nama.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebaklirik', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var question = JSON.parse(
            fs.readFileSync(__path + '/data/tebaklirik.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...question[~~(Math.random() * question.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakchara', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var name = JSON.parse(
            fs.readFileSync(__path + '/data/tebakchara.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...name[~~(Math.random() * name.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebaktebakan', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebaktebakan.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakbendera', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var bendera = JSON.parse(
            fs.readFileSync(__path + '/data/tebakbendera.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...bendera[~~(Math.random() * bendera.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})





//Download


router.get('/music/joox', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
  Joox(query)
  .then((result) => {
  res.json(result)
    res.json(result)
  });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/music/spotify', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://apidhani.herokuapp.com/api/music/joox?apikey=${danikey}&query=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/download/playmp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});

router.get("/download/playmp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});


router.get('/download/search', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});

router.get('/download/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     TiktokDownloader(`${url}`)
        .then(data => {
        var result = data.result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
               result
             })
         })
         .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});

router.get('/download/ig', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    let hasil = `https://api.dapuhy.xyz/api/socialmedia/igdownloader?url=${url}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/ig.mp4', data)
    res.sendFile(__path +'/tmp/ig.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/download/igstory', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://megayaa.herokuapp.com/api/igstori?username=${username}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/cocofun', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://x-restapi.herokuapp.com/api/video-dl?url=${url}&apikey=BETA`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/music/joox2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/joox?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/jooxplay', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/joox?apikey=apivinz&q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/spotifydl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://megayaa.herokuapp.com/api/spotifydl?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/gdbypass', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/gdbypass?apikey=apivinz&url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/likedl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zacros.my.id/downloader/likeedl?link=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/scdl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zacros.my.id/downloader/scdl?link=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/sfiledl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zacros.my.id/downloader/sfiledl?link=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/apkdl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-download?dl_url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/apk', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-search?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/mediafire', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/mediafire?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/ytmp32', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/ytmp3?url=https://youtu.be/7KrV0drYfz0&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/ytmp42', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/ytmp4?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/twittervid', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twvid?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.getVideo;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/twitterimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twimg?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.images;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/tiktok3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://tiktokd.herokuapp.com/tiktok?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.link;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/tiktok2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/tiktok?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/snapsave', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/snapsave?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/9convert', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/9convert?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/yt1s', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/yt1s?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/twitter', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/twitter?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/musical', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/musical?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/nguteksnaptik', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/nguteksnaptik?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/aiovideodl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/aiovideodl?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/snaptik', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/socialmedia/snaptik?url=${url}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

//Stalk

router.get('/stalk/npm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/stalk/repository', async (req, res, next) => {
        const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/stalk/repository?apikey=NisaaCantik&username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/stalk/github', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zacros.my.id/info/ghstalk?username=${username}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/yt', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://x-restapi.herokuapp.com/api/yt-stalk?username=${username}&apikey=BETA`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/yt2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zacros.my.id/info/ytstalk?username=${username}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/ig', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://hardianto.xyz/api/igstalk?username=${username}&apikey=hardianto`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

//Edukasi

router.get('/edukasi/persegipanjang', async(req, res, next) => {
  const apikey = req.query.apikey;
  const panjang = req.query.panjang;
  const lebar = req.query.lebar;
  
  if(!panjang) return res.json(loghandler.notpanjang)
  if(!lebar) return res.json(loghandler.notlebar)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/ppanjang?pjg=${panjang}&lebar=${lebar}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/edukasi/perkalian', async(req, res, next) => {
  const apikey = req.query.apikey;
  const angka1 = req.query.angka1;
  const angka2 = req.query.angka2;
  
  if(!angka1) return res.json(loghandler.notangka1)
  if(!angka2) return res.json(loghandler.notangka2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${angka1}&angka2=${angka2}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/edukasi/persegi', async(req, res, next) => {
  const apikey = req.query.apikey;
  const sisi = req.query.sisi;
  
  if(!sisi) return res.json(loghandler.notsisi)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${sisi}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/edukasi/kubik', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/edukasi/kuadrat', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

//Pribomo

router.get('/primbon/zodiak', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zacros.my.id/primbon/zodiakharian?zodiak=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/artimimpi', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/fun/artimimpi?mimpi=${text}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/artinama', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/fun/artinama?nama=${text}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/artikata', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${text}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/tahilalat', async(req, res, next) => {
  var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/tahi-lalat?apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/namajawa', async(req, res, next) => {
  var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/namajawa?apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/music/liriklagu', async (req, res, next) => {       
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://apidhani.herokuapp.com/api/music/liriklagu?query=${query}&apikey=NisaaCantik`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/music/chordlagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

//Search

router.get('/search/wallpaperflare', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://hadi-api.herokuapp.com/api/wallpaperflare?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/googleimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/googleimage?query=itsuki+nakano&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/sticker', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/searchsticker?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/xnxx', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/xvideo', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/pornhub', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/pornhub/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.res;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/pinterest', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/pinterest?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/yandeximage', async(req, res, next) => {

const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    let hasil = `https://api.dapuhy.xyz/api/search/yandeximage?query=${query}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/yandex.jpeg', data)
    res.sendFile(__path +'/tmp/yandex.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/search/pinterestimage', async(req, res, next) => {

const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    let hasil = `https://api.dapuhy.xyz/api/search/pinterest-image?query=${query}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/pinterest.jpeg', data)
    res.sendFile(__path +'/tmp/pinterest.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/search/bing', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/bingsearch?query=${q}&page=2&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/stickerline', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://x-restapi.herokuapp.com/api/sline-dl?url=${q}&apikey=BETA`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/google', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://x-restapi.herokuapp.com/api/google-search?q=${q}&apikey=BETA`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/playstore', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/playstore?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/playstoreinfo', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/playstore-info?id=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/wikipedia', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/wikipedia?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/mangatoon', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/mangatoon?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/palingmurah', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/paling-murah?apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/telesticker', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/telestick?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.detail;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/amazon', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/amazon-search?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/amazon', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/amazon-search?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/shopee', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://bx-hunter.herokuapp.com/api/shopee-search?text=${q}&apikey=FuckBitch`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/gore', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://bx-hunter.herokuapp.com/api/randomgore?query=${q}&apikey=FuckBitch`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/resepmakanan', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${q}&apikey=FuckBitch`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/xvideodetail', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${url}&apikey=FuckBitch`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/whatsapp-group', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/thelazy', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/thelazy?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/cersex', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/cersex-search?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/artikata', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/katabijak', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/kata-bijak?q=${q}&apikey=IkyOgiwara`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/amino', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/amino?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/layarkaca', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/layarkaca?film=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/sfile', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/sfile?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/moddroid', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/moddroid?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/apkmody', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/apkmody?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/happymod', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/happymod?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/android1', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/android1?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/gsmarena', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/gsmarena?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/gsmarena2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/gsmarena2?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/emoji', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/emoji?emoji=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/javhdd', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/javhdd?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/javhdporn', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/javhdporn?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/rajaapk', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/rajaapk?query=${q}&page=1&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/uptodown', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/uptodown?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/nekopoi', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.dapuhy.xyz/api/search/nekopoi?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/codepos', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://x-restapi.herokuapp.com/api/codepos-search?q=${q}&apikey=BETA`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/heroml', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://x-restapi.herokuapp.com/api/heroml?q=${q}&apikey=BETA`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/listheroml', async(req, res, next) => {
var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

    fetch(encodeURI(`https://api.dapuhy.xyz/api/others/listheroml?apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.listhero;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/tokohindo', async(req, res, next) => {
var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

    fetch(encodeURI(`https://api.dapuhy.xyz/api/others/tokohindo?apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/search/yourcountdown', async(req, res, next) => {
var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

    fetch(encodeURI(`https://api.dapuhy.xyz/api/others/yourcountdown?query=${q}&apikey=SayuBotz`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

//Random Text

router.get('/random/faktaunik', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/faktaunik?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katabijak', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/katabijak?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/pantun', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/pantun?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/puisi', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/puisi?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotes', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/quotes`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotesanime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/quotesanime?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/truth', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/truth?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/dare', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/dare?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quoteskanye', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/quoteskanye?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotesislami', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/quotesislami?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotesdilan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/quotesdilan?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotesff', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/quotesff?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotespubg', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/quotespubg?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quoteshacker', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/quoteshacker?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/cerpen', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/cerpen?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katailham', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/katailham?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katasindiran', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/katasindiran?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katabucin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/katabucin?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katabucin2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/katabucin2?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katagalau', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/katagalau?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katagombal', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/katagombal?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/kataml', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://apidhani.herokuapp.com/api/randomtext/kataml?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/ceritahoror', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/fakta', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://x-restapi.herokuapp.com/api/random-fakta?apikey=BETA`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.fakta;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/pantun-pakboy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/pantun-pakboy?apikey=IkyOgiwara`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/nick-epep', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=IkyOgiwara`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/motivasi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://x-restapi.herokuapp.com/api/random-motivasi?apikey=BETA`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.motivasi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quoteslucu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.dapuhy.xyz/api/fun/quoteslucu?apikey=SayuBotz`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/jagokata', async (req, res, next) => {
        const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.dapuhy.xyz/api/fun/jagokata?query=${query}&apikey=SayuBotz`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katasenja', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://yx-api.herokuapp.com/api/katasenja`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katacinta', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://yx-api.herokuapp.com/api/katacinta`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/fml', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://yx-api.herokuapp.com/api/fml`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/short/tinyurl', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
	} else {
res.json(loghandler.invalidKey)
}
});

//memegen

router.get('/maker/memegen', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const img = req.query.img;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!img) return res.json(longhandler.notparam)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/maker/memegen?text1=${text1}&text2=${text2}&img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/memegen.jpg', data)
  res.sendFile(__path +'/tmp/memegen.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/memegen2', async(req, res, next) => {
  const text = req.query.text;
  const img = req.query.img;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!img) return res.json(longhandler.notparam)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/maker/memegen2?text=${text}&img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/memegen2.jpg', data)
  res.sendFile(__path +'/tmp/memegen2.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

// Other 

router.get('/tools/wpuser', async(req, res, next) => {
  const link = req.query.url;
  const apikey = req.query.apikey;
  
  if(!link) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    WPUser(link)
    .then((data) => {
      res.json(data)
    })
} else {
  res.json(loghandler.invalidKey)
};
});

router.get('/info/cuaca', async(req, res, next) => {
  const apikey = req.query.apikey;
  const kota = req.query.kota;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!kota) return res.json({status: false, code: 406, message: 'masukkan parameter kota'})
  if(listkey.includes(apikey)) {
    Cuaca(kota)
    .then((data) => {
      res.json(data)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/info/gempa', async (req, res, next) => {
	        var Apikey = req.query.apikey

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})

// Islam Menu

router.get('/muslim/audiosholawatan', async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = `https://apidhani.herokuapp.com/api/muslim/audiosholawatan?apikey=NisaaCantik`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/audiosholawatan.mp3', data)
    res.sendFile(__path +'/tmp/audiosholawatan.mp3')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		Apikey = req.query.apikey;

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/hadits', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/quran', async (req, res, next) => {
        var Apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.dapuhy.xyz/api/islam/tahlil?apikey=SayuBotz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/wirid', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.dapuhy.xyz/api/islam/wirid?apikey=SayuBotz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.dapuhy.xyz/api/islam/ayatkursi?apikey=SayuBotz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.dapuhy.xyz/api/islam/doaharian?apikey=SayuBotz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.dapuhy.xyz/api/islam/bacaanshalat?apikey=SayuBotz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.dapuhy.xyz/api/islam/niatshalat?apikey=SayuBotz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/jadwalshalat', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/jadwal-shalat?q=${kota}&apikey=IkyOgiwara`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/search/image', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
  } else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/nsfw/ahegao', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ahegao = JSON.parse(fs.readFileSync(__path +'/data/ahegao.json'));
  const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
  data = await fetch(randahegao).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ahegao.jpeg', data)
  res.sendFile(__path +'/tmp/ahegao.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/ass', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ass = JSON.parse(fs.readFileSync(__path +'/data/ass.json'));
  const randass = ass[Math.floor(Math.random() * ass.length)];
  data = await fetch(randass).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ass.jpeg', data)
  res.sendFile(__path +'/tmp/ass.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/bdsm', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const bdsm = JSON.parse(fs.readFileSync(__path +'/data/bdsm.json'));
  const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];
  data = await fetch(randbdsm).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bdsm.jpeg', data)
  res.sendFile(__path +'/tmp/bdsm.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/blowjob', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const blowjob = JSON.parse(fs.readFileSync(__path +'/data/blowjob.json'));
  const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];
  data = await fetch(randblowjob).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blowjob.jpeg', data)
  res.sendFile(__path +'/tmp/blowjob.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/cuckold', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cuckold = JSON.parse(fs.readFileSync(__path +'/data/cuckold.json'));
  const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];
  data = await fetch(randcuckold).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cuckold.jpeg', data)
  res.sendFile(__path +'/tmp/cuckold.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/cum', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cum = JSON.parse(fs.readFileSync(__path +'/data/cum.json'));
  const randcum = cum[Math.floor(Math.random() * cum.length)];
  data = await fetch(randcum).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cum.jpeg', data)
  res.sendFile(__path +'/tmp/cum.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/ero', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ero = JSON.parse(fs.readFileSync(__path +'/data/ero.json'));
  const randero = ero[Math.floor(Math.random() * ero.length)];
  data = await fetch(randero).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ero.jpeg', data)
  res.sendFile(__path +'/tmp/ero.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/femdom', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const femdom = JSON.parse(fs.readFileSync(__path +'/data/femdom.json'));
  const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];
  data = await fetch(randfemdom).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/femdom.jpeg', data)
  res.sendFile(__path +'/tmp/femdom.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/foot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const foot = JSON.parse(fs.readFileSync(__path +'/data/foot.json'));
  const randfoot = foot[Math.floor(Math.random() * foot.length)];
  data = await fetch(randfoot).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/foot.jpeg', data)
  res.sendFile(__path +'/tmp/foot.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/gangbang', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gangbang = JSON.parse(fs.readFileSync(__path +'/data/gangbang.json'));
  const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];
  data = await fetch(randgangbang).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gangbang.jpeg', data)
  res.sendFile(__path +'/tmp/gangbang.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/glasses', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const glasses = JSON.parse(fs.readFileSync(__path +'/data/glasses.json'));
  const randglasses = glasses[Math.floor(Math.random() * glasses.length)];
  data = await fetch(randglasses).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/glasses.jpeg', data)
  res.sendFile(__path +'/tmp/glasses.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/hentai', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const hentai = JSON.parse(fs.readFileSync(__path +'/data/hentai.json'));
  const randhentai = hentai[Math.floor(Math.random() * hentai.length)];
  data = await fetch(randhentai).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hentai.jpeg', data)
  res.sendFile(__path +'/tmp/hentai.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/gifs', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gifs = JSON.parse(fs.readFileSync(__path +'/data/gifs.json'));
  const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
  data = await fetch(randgifs).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gifs.jpeg', data)
  res.sendFile(__path +'/tmp/gifs.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/jahy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jahy = JSON.parse(fs.readFileSync(__path +'/data/jahy.json'));
  const randjahy = jahy[Math.floor(Math.random() * jahy.length)];
  data = await fetch(randjahy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jahy.jpeg', data)
  res.sendFile(__path +'/tmp/jahy.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/manga', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const manga = JSON.parse(fs.readFileSync(__path +'/data/manga.json'));
  const randmanga = manga[Math.floor(Math.random() * manga.length)];
  data = await fetch(randmanga).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/manga.jpeg', data)
  res.sendFile(__path +'/tmp/manga.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/masturbation', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const masturbation = JSON.parse(fs.readFileSync(__path +'/data/masturbation.json'));
  const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];
  data = await fetch(randmasturbation).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/masturbation.jpeg', data)
  res.sendFile(__path +'/tmp/masturbation.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/neko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const neko = JSON.parse(fs.readFileSync(__path +'/data/neko.json'));
  const randneko = neko[Math.floor(Math.random() * neko.length)];
  data = await fetch(randneko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neko.jpeg', data)
  res.sendFile(__path +'/tmp/neko.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/orgy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const orgy = JSON.parse(fs.readFileSync(__path +'/data/orgy.json'));
  const randorgy = orgy[Math.floor(Math.random() * orgy.length)];
  data = await fetch(randorgy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/orgy.jpeg', data)
  res.sendFile(__path +'/tmp/orgy.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/panties', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const panties = JSON.parse(fs.readFileSync(__path +'/data/panties.json'));
  const randpanties = panties[Math.floor(Math.random() * panties.length)];
  data = await fetch(randpanties).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/panties.jpeg', data)
  res.sendFile(__path +'/tmp/panties.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/pussy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pussy = JSON.parse(fs.readFileSync(__path +'/data/pussy.json'));
  const randpussy = pussy[Math.floor(Math.random() * pussy.length)];
  data = await fetch(randpussy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pussy.jpeg', data)
  res.sendFile(__path +'/tmp/pussy.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/neko2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const neko2 = JSON.parse(fs.readFileSync(__path +'/data/neko2.json'));
  const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];
  data = await fetch(randneko2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neko2.jpeg', data)
  res.sendFile(__path +'/tmp/neko2.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/tentacles', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tentacles = JSON.parse(fs.readFileSync(__path +'/data/tentacles.json'));
  const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];
  data = await fetch(randtentacles).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tentacles.jpeg', data)
  res.sendFile(__path +'/tmp/tentacles.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/thighs', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const thighs = JSON.parse(fs.readFileSync(__path +'/data/thighs.json'));
  const randthighs = thighs[Math.floor(Math.random() * thighs.length)];
  data = await fetch(randthighs).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/thighs.jpeg', data)
  res.sendFile(__path +'/tmp/thighs.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/yuri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yuri = JSON.parse(fs.readFileSync(__path +'/data/yuri.json'));
  const randyuri = yuri[Math.floor(Math.random() * yuri.length)];
  data = await fetch(randyuri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuri.jpeg', data)
  res.sendFile(__path +'/tmp/yuri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/zettai', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const zettai = JSON.parse(fs.readFileSync(__path +'/data/zettai.json'));
  const randzettai = zettai[Math.floor(Math.random() * zettai.length)];
  data = await fetch(randzettai).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/zettai.jpeg', data)
  res.sendFile(__path +'/tmp/zettai.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/keneki', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const keneki = JSON.parse(fs.readFileSync(__path +'/data/keneki.json'));
  const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];
  data = await fetch(randkeneki).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/keneki.jpeg', data)
  res.sendFile(__path +'/tmp/keneki.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/megumin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const megumin = JSON.parse(fs.readFileSync(__path +'/data/megumin.json'));
  const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];
  data = await fetch(randmegumin).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/megumin.jpeg', data)
  res.sendFile(__path +'/tmp/megumin.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/yotsuba', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yotsuba = JSON.parse(fs.readFileSync(__path +'/data/yotsuba.json'));
  const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
  data = await fetch(randyotsuba).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yotsuba.jpeg', data)
  res.sendFile(__path +'/tmp/yotsuba.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shinomiya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shinomiya = JSON.parse(fs.readFileSync(__path +'/data/shinomiya.json'));
  const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];
  data = await fetch(randshinomiya).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shinomiya.jpeg', data)
  res.sendFile(__path +'/tmp/shinomiya.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/yumeko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yumeko = JSON.parse(fs.readFileSync(__path +'/data/yumeko.json'));
  const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
  data = await fetch(randyumeko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yumeko.jpeg', data)
  res.sendFile(__path +'/tmp/yumeko.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/tejina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tejina = JSON.parse(fs.readFileSync(__path +'/data/tejina.json'));
  const randtejina = tejina[Math.floor(Math.random() * tejina.length)];
  data = await fetch(randtejina).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tejina.jpeg', data)
  res.sendFile(__path +'/tmp/tejina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/chiho', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const chiho = JSON.parse(fs.readFileSync(__path +'/data/chiho.json'));
  const randchiho = chiho[Math.floor(Math.random() * chiho.length)];
  data = await fetch(randchiho).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/chiho.jpeg', data)
  res.sendFile(__path +'/tmp/chiho.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cyberspace = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
  data = await fetch(randcyberspace).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cyberspace.jpeg', data)
  res.sendFile(__path +'/tmp/cyberspace.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/gaming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gaming = JSON.parse(fs.readFileSync(__path +'/data/GameWallp.json'));
  const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
  data = await fetch(randgaming).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gaming.jpeg', data)
  res.sendFile(__path +'/tmp/gaming.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/islami', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const islami = JSON.parse(fs.readFileSync(__path +'/data/Islamic.json'));
  const randislami = islami[Math.floor(Math.random() * islami.length)];
  data = await fetch(randislami).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/islami.jpeg', data)
  res.sendFile(__path +'/tmp/islami.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/programing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const programing = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randprograming = programing[Math.floor(Math.random() * programing.length)];
  data = await fetch(randprograming).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/programing.jpeg', data)
  res.sendFile(__path +'/tmp/programing.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/teknologi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const teknologi = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'));
  const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
  data = await fetch(randteknologi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/teknologi.jpeg', data)
  res.sendFile(__path +'/tmp/teknologi.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/mountain', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const mountain = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randmountain = mountain[Math.floor(Math.random() * mountain.length)];
  data = await fetch(randmountain).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/mountain.jpeg', data)
  res.sendFile(__path +'/tmp/mountain.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/tatasurya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tatasurya = JSON.parse(fs.readFileSync(__path +'/data/tatasurya.json'));
  const randtatasurya = tatasurya[Math.floor(Math.random() * tatasurya.length)];
  data = await fetch(randtatasurya).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tatasurya.jpeg', data)
  res.sendFile(__path +'/tmp/tatasurya.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kartun', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kartun = JSON.parse(fs.readFileSync(__path +'/data/kartun.json'));
  const randkartun = kartun[Math.floor(Math.random() * kartun.length)];
  data = await fetch(randkartun).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kartun.jpeg', data)
  res.sendFile(__path +'/tmp/kartun.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/yuli', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yuli = JSON.parse(fs.readFileSync(__path +'/data/yulibocil.json'));
  const randyuli = yuli[Math.floor(Math.random() * yuli.length)];
  data = await fetch(randyuli).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuli.jpeg', data)
  res.sendFile(__path +'/tmp/yuli.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/pentol', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pentol = JSON.parse(fs.readFileSync(__path +'/data/pentol.json'));
  const randpentol = pentol[Math.floor(Math.random() * pentol.length)];
  data = await fetch(randpentol).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pentol.jpeg', data)
  res.sendFile(__path +'/tmp/pentol.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/katakata', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const katakata = JSON.parse(fs.readFileSync(__path +'/data/katakata.json'));
  const randkatakata = katakata[Math.floor(Math.random() * katakata.length)];
  data = await fetch(randkatakata).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/katakata.jpeg', data)
  res.sendFile(__path +'/tmp/katakata.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/toukachan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const toukachan = JSON.parse(fs.readFileSync(__path +'/data/toukachan.json'));
  const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];
  data = await fetch(randtoukachan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/toukachan.jpeg', data)
  res.sendFile(__path +'/tmp/toukachan.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/akira', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const akira = JSON.parse(fs.readFileSync(__path +'/data/akira.json'));
  const randakira = akira[Math.floor(Math.random() * akira.length)];
  data = await fetch(randakira).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/akira.jpeg', data)
  res.sendFile(__path +'/tmp/akira.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/itori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const itori = JSON.parse(fs.readFileSync(__path +'/data/itori.json'));
  const randitori = itori[Math.floor(Math.random() * itori.length)];
  data = await fetch(randitori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/itori.jpeg', data)
  res.sendFile(__path +'/tmp/itori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kurumi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kurumi = JSON.parse(fs.readFileSync(__path +'/data/kurumi.json'));
  const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];
  data = await fetch(randkurumi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kurumi.jpeg', data)
  res.sendFile(__path +'/tmp/kurumi.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/miku', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const miku = JSON.parse(fs.readFileSync(__path +'/data/miku.json'));
  const randmiku = miku[Math.floor(Math.random() * miku.length)];
  data = await fetch(randmiku).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/miku.jpeg', data)
  res.sendFile(__path +'/tmp/miku.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/pokemon', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pokemon = JSON.parse(fs.readFileSync(__path +'/data/pokemon.json'));
  const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
  data = await fetch(randpokemon).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pokemon.jpeg', data)
  res.sendFile(__path +'/tmp/pokemon.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/ryujin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ryujin = JSON.parse(fs.readFileSync(__path +'/data/ryujin.json'));
  const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];
  data = await fetch(randryujin).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ryujin.jpeg', data)
  res.sendFile(__path +'/tmp/ryujin.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/rose', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const rose = JSON.parse(fs.readFileSync(__path +'/data/rose.json'));
  const randrose = rose[Math.floor(Math.random() * rose.length)];
  data = await fetch(randrose).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rose.jpeg', data)
  res.sendFile(__path +'/tmp/rose.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kaori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kaori = JSON.parse(fs.readFileSync(__path +'/data/kaori.json'));
  const randkaori = kaori[Math.floor(Math.random() * kaori.length)];
  data = await fetch(randkaori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kaori.jpeg', data)
  res.sendFile(__path +'/tmp/kaori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shizuka', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shizuka = JSON.parse(fs.readFileSync(__path +'/data/shizuka.json'));
  const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
  data = await fetch(randshizuka).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shizuka.jpeg', data)
  res.sendFile(__path +'/tmp/shizuka.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kaga', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kaga = JSON.parse(fs.readFileSync(__path +'/data/kaga.json'));
  const randkaga = kaga[Math.floor(Math.random() * kaga.length)];
  data = await fetch(randkaga).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kaga.jpeg', data)
  res.sendFile(__path +'/tmp/kaga.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kotori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kotori = JSON.parse(fs.readFileSync(__path +'/data/kotori.json'));
  const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
  data = await fetch(randkotori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kotori.jpeg', data)
  res.sendFile(__path +'/tmp/kotori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/mikasa', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const mikasa = JSON.parse(fs.readFileSync(__path +'/data/mikasa.json'));
  const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];
  data = await fetch(randmikasa).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/mikasa.jpeg', data)
  res.sendFile(__path +'/tmp/mikasa.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/akiyama', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const akiyama = JSON.parse(fs.readFileSync(__path +'/data/akiyama.json'));
  const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];
  data = await fetch(randakiyama).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/akiyama.jpeg', data)
  res.sendFile(__path +'/tmp/akiyama.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/gremory', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gremory = JSON.parse(fs.readFileSync(__path +'/data/gremory.json'));
  const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
  data = await fetch(randgremory).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gremory.jpeg', data)
  res.sendFile(__path +'/tmp/gremory.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/isuzu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const isuzu = JSON.parse(fs.readFileSync(__path +'/data/isuzu.json'));
  const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];
  data = await fetch(randisuzu).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/isuzu.jpeg', data)
  res.sendFile(__path +'/tmp/isuzu.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/cosplay', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cosplay = JSON.parse(fs.readFileSync(__path +'/data/cosplay.json'));
  const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
  data = await fetch(randcosplay).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cosplay.jpeg', data)
  res.sendFile(__path +'/tmp/cosplay.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shina = JSON.parse(fs.readFileSync(__path +'/data/shina.json'));
  const randshina = shina[Math.floor(Math.random() * shina.length)];
  data = await fetch(randshina).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shina.jpeg', data)
  res.sendFile(__path +'/tmp/shina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kagura', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kagura = JSON.parse(fs.readFileSync(__path +'/data/kagura.json'));
  const randkagura = kagura[Math.floor(Math.random() * kagura.length)];
  data = await fetch(randkagura).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kagura.jpeg', data)
  res.sendFile(__path +'/tmp/kagura.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shinka', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shinka = JSON.parse(fs.readFileSync(__path +'/data/shinka.json'));
  const randshinka = shinka[Math.floor(Math.random() * shinka.length)];
  data = await fetch(randshinka).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shinka.jpeg', data)
  res.sendFile(__path +'/tmp/shinka.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/eba', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const eba = JSON.parse(fs.readFileSync(__path +'/data/eba.json'));
  const randeba = eba[Math.floor(Math.random() * eba.length)];
  data = await fetch(randeba).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/eba.jpeg', data)
  res.sendFile(__path +'/tmp/eba.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/deidara', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Deidara = JSON.parse(fs.readFileSync(__path +'/data/deidara.json'));
  const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];
  data = await fetch(randDeidara).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/deidara.jpeg', data)
  res.sendFile(__path +'/tmp/deidara.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/jeni', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jeni = JSON.parse(fs.readFileSync(__path +'/data/jeni.json'));
  const randjeni = jeni[Math.floor(Math.random() * jeni.length)];
  data = await fetch(randjeni).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jeni.jpeg', data)
  res.sendFile(__path +'/tmp/jeni.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/jiso', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jiso = JSON.parse(fs.readFileSync(__path +'/data/jiso.json'));
  const randjiso = jiso[Math.floor(Math.random() * jiso.length)];
  data = await fetch(randjiso).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jiso.jpeg', data)
  res.sendFile(__path +'/tmp/jiso.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/satanic', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const satanic = JSON.parse(fs.readFileSync(__path +'/data/satanic.json'));
  const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
  data = await fetch(randsatanic).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/satanic.jpeg', data)
  res.sendFile(__path +'/tmp/satanic.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/cecan2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cecan2 = JSON.parse(fs.readFileSync(__path +'/data/cecan2.json'));
  const randcecan2 = cecan2[Math.floor(Math.random() * cecan2.length)];
  data = await fetch(randcecan2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cecan2.jpeg', data)
  res.sendFile(__path +'/tmp/cecan2.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/cogan2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cogan2 = JSON.parse(fs.readFileSync(__path +'/data/cogan2.json'));
  const randcogan2 = cogan2[Math.floor(Math.random() * cogan2.length)];
  data = await fetch(randcogan2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cogan2.jpeg', data)
  res.sendFile(__path +'/tmp/cogan2.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/itachi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Itachi = JSON.parse(fs.readFileSync(__path +'/data/itachi.json'));
  const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];
  data = await fetch(randItachi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ita.jpeg', data)
  res.sendFile(__path +'/tmp/ita.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/madara', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Madara = JSON.parse(fs.readFileSync(__path +'/data/madara.json'));
  const randMadara = Madara[Math.floor(Math.random() * Madara.length)];
  data = await fetch(randMadara).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/madara.jpeg', data)
  res.sendFile(__path +'/tmp/madara.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/yuki', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Yuki = JSON.parse(fs.readFileSync(__path +'/data/yuki.json'));
  const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];
  data = await fetch(randYuki).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuki.jpeg', data)
  res.sendFile(__path +'/tmp/yuki.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/asuna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const asuna = JSON.parse(fs.readFileSync(__path +'/data/asuna.json'));
  const randasuna = asuna[Math.floor(Math.random() * asuna.length)];
  data = await fetch(randasuna).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/asuna.jpeg', data)
  res.sendFile(__path +'/tmp/asuna.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/ayuzawa', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ayuzawa = JSON.parse(fs.readFileSync(__path +'/data/ayuzawa.json'));
  const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
  data = await fetch(randayuzawa).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ayuzawa.jpeg', data)
  res.sendFile(__path +'/tmp/ayuzawa.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/chitoge', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const chitoge = JSON.parse(fs.readFileSync(__path +'/data/chitoge.json'));
  const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];
  data = await fetch(randchitoge).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/chitoge.jpeg', data)
  res.sendFile(__path +'/tmp/chitoge.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/emilia', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const emilia = JSON.parse(fs.readFileSync(__path +'/data/emilia.json'));
  const randemilia = emilia[Math.floor(Math.random() * emilia.length)];
  data = await fetch(randemilia).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/emilia.jpeg', data)
  res.sendFile(__path +'/tmp/emilia.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/hestia', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const hestia = JSON.parse(fs.readFileSync(__path +'/data/hestia.json'));
  const randhestia = hestia[Math.floor(Math.random() * hestia.length)];
  data = await fetch(randhestia).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hestia.jpeg', data)
  res.sendFile(__path +'/tmp/hestia.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/inori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const inori = JSON.parse(fs.readFileSync(__path +'/data/inori.json'));
  const randinori = inori[Math.floor(Math.random() * inori.length)];
  data = await fetch(randinori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/inori.jpeg', data)
  res.sendFile(__path +'/tmp/inori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/ana', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ana = JSON.parse(fs.readFileSync(__path +'/data/ana.json'));
  const randana = ana[Math.floor(Math.random() * ana.length)];
  data = await fetch(randana).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ana.jpeg', data)
  res.sendFile(__path +'/tmp/ana.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/boruto', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Boruto = JSON.parse(fs.readFileSync(__path +'/data/boruto.json'));
  const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];
  data = await fetch(randBoruto).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bor.jpeg', data)
  res.sendFile(__path +'/tmp/bor.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/erza', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Erza = JSON.parse(fs.readFileSync(__path +'/data/erza.json'));
  const randErza = Erza[Math.floor(Math.random() * Erza.length)];
  data = await fetch(randErza).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/erza.jpeg', data)
  res.sendFile(__path +'/tmp/erza.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kakasih', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Kakasih = JSON.parse(fs.readFileSync(__path +'/data/kakasih.json'));
  const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];
  data = await fetch(randKakasih).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ka.jpeg', data)
  res.sendFile(__path +'/tmp/ka.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/sagiri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sagiri = JSON.parse(fs.readFileSync(__path +'/data/sagiri.json'));
  const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
  data = await fetch(randSagiri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sagiri.jpeg', data)
  res.sendFile(__path +'/tmp/sagiri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/minato', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Minato = JSON.parse(fs.readFileSync(__path +'/data/minato.json'));
  const randMinato = Minato[Math.floor(Math.random() * Minato.length)];
  data = await fetch(randMinato).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/minato.jpeg', data)
  res.sendFile(__path +'/tmp/minato.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/naruto', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Naruto = JSON.parse(fs.readFileSync(__path +'/data/naruto.json'));
  const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];
  data = await fetch(randNaruto).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/naruto.jpeg', data)
  res.sendFile(__path +'/tmp/naruto.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/nezuko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Nezuko = JSON.parse(fs.readFileSync(__path +'/data/nezuko.json'));
  const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];
  data = await fetch(randNezuko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/nezu.jpeg', data)
  res.sendFile(__path +'/tmp/nezu.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/onepiece', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Pic = JSON.parse(fs.readFileSync(__path +'/data/onepiece.json'));
  const randPic = Pic[Math.floor(Math.random() * Pic.length)];
  data = await fetch(randPic).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pic.jpeg', data)
  res.sendFile(__path +'/tmp/pic.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/rize', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Rize = JSON.parse(fs.readFileSync(__path +'/data/rize.json'));
  const randRize = Rize[Math.floor(Math.random() * Rize.length)];
  data = await fetch(randRize).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rize.jpeg', data)
  res.sendFile(__path +'/tmp/rize.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/sakura', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sakura = JSON.parse(fs.readFileSync(__path +'/data/sakura.json'));
  const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];
  data = await fetch(randSakura).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sakura.jpeg', data)
  res.sendFile(__path +'/tmp/sakura.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/sasuke', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sasuke = JSON.parse(fs.readFileSync(__path +'/data/sasuke.json'));
  const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];
  data = await fetch(randSasuke).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sasuke.jpeg', data)
  res.sendFile(__path +'/tmp/sasuke.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/tsunade', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Su = JSON.parse(fs.readFileSync(__path +'/data/tsunade.json'));
  const randSu = Su[Math.floor(Math.random() * Su.length)];
  data = await fetch(randSu).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/su.jpeg', data)
  res.sendFile(__path +'/tmp/su.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/montor', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mon = JSON.parse(fs.readFileSync(__path +'/data/montor.json'));
  const randMon = Mon[Math.floor(Math.random() * Mon.length)];
  data = await fetch(randMon).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/montor.jpeg', data)
  res.sendFile(__path+ '/tmp/montor.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/mobil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mob = JSON.parse(fs.readFileSync(__path +'/data/mobil.json'));
  const randMob = Mob[Math.floor(Math.random() * Mob.length)];
  data = await fetch(randMob).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/mobil.jpeg', data)
  res.sendFile(__path+ '/tmp/mobil.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/boneka-chucky', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Bon = JSON.parse(fs.readFileSync(__path +'/data/boneka.json'));
  const randBon = Bon[Math.floor(Math.random() * Bon.length)];
  data = await fetch(randBon).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/chucky.jpeg', data)
  res.sendFile(__path+ '/tmp/chucky.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/anime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai23 = JSON.parse(fs.readFileSync(__path +'/data/wallhp2.json'));
  const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];
  data = await fetch(randWai23).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wallhp2.jpeg', data)
  res.sendFile(__path+ '/tmp/wallhp2.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/random/blackpink', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Black = JSON.parse(fs.readFileSync(__path +'/data/blackpink.json'));
  const randBlack = Black[Math.floor(Math.random() * Black.length)]
  data = await fetch(randBlack).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blak.jpeg', data)
  res.sendFile(__path +'/tmp/blak.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/wallhp', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai22 = JSON.parse(fs.readFileSync(__path +'/data/wallhp.json'));
  const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];
  data = await fetch(randWai22).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wallhp.jpeg', data)
  res.sendFile(__path+ '/tmp/wallhp.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/waifu2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai2 = JSON.parse(fs.readFileSync(__path +'/data/waifu2.json'));
  const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
  data = await fetch(randWai2).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wibu2.jpeg', data)
  res.sendFile(__path+ '/tmp/wibu2.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/waifu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai = JSON.parse(fs.readFileSync(__path +'/data/waifu.json'));
  const randWai = Wai[Math.floor(Math.random() * Wai.length)];
  data = await fetch(randWai).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wibu.jpeg', data)
  res.sendFile(__path+ '/tmp/wibu.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kpop', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Kpop = JSON.parse(fs.readFileSync(__path +'/data/kpop.json'));
  const randKpop = Kpop[Math.floor(Math.random() * Kpop.length)]
  data = await fetch(randKpop).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kpop.jpeg', data)
  res.sendFile(__path +'/tmp/kpop.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/hekel', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Hekel = JSON.parse(fs.readFileSync(__path +'/data/hekel.json'));
  const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
  data = await fetch(randHekel).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hek.jpeg', data)
  res.sendFile(__path +'/tmp/hek.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kucing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Kucing = JSON.parse(fs.readFileSync(__path +'/data/kucing.json'));
  const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]
  data = await fetch(randKucing).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kucing.jpeg', data)
  res.sendFile(__path +'/tmp/kucing.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/pubg', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Pubg = JSON.parse(fs.readFileSync(__path +'/data/pubg.json'));
  const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]
  data = await fetch(randPubg).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pubg.jpeg', data)
  res.sendFile(__path +'/tmp/pubg.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/ppcouple', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Pp = JSON.parse(fs.readFileSync(__path +'/data/profil.json'));
  const randPp = Pp[Math.floor(Math.random() * Pp.length)]
  data = await fetch(randPp).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pp.jpeg', data)
  res.sendFile(__path +'/tmp/pp.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/anjing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Anjing = JSON.parse(fs.readFileSync(__path +'/data/anjing.json'));
  const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]
  data = await fetch(randAnjing).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ajg.jpeg', data)
  res.sendFile(__path +'/tmp/ajg.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/doraemon', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Dora = JSON.parse(fs.readFileSync(__path +'/data/doraemon.json'));
  const randDora = Dora[Math.floor(Math.random() * Dora.length)]
  data = await fetch(randDora).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/dora.jpeg', data)
  res.sendFile(__path +'/tmp/dora.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/cogan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Cogan = JSON.parse(fs.readFileSync(__path +'/data/cogan.json'));
  const randCogan = Cogan[Math.floor(Math.random() * Cogan.length)]
  data = await fetch(randCogan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cogan.jpeg', data)
  res.sendFile(__path +'/tmp/cogan.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/elaina', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Elaina = JSON.parse(fs.readFileSync(__path +'/data/elaina.json'))
const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
//tansole.log(randLoli)
data = await fetch(randElaina).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/elaina.jpeg', data)
res.sendFile(__path +'/tmp/elaina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/loli', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Loli = JSON.parse(fs.readFileSync(__path +'/data/loli.json'))
const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
//tansole.log(randLoli)
data = await fetch(randLoli).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/loli.jpeg', data)
res.sendFile(__path +'/tmp/loli.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/yuri', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Yuri = JSON.parse(fs.readFileSync(__path +'/data/yuri.json'))
const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
//tansole.log(randTech)
data = await fetch(randYuri).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/Yuri.jpeg', data)
res.sendFile(__path +'/tmp/Yuri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/cecan/cecan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cecan = JSON.parse(fs.readFileSync(__path +'/data/cecan.json'));
  const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
  data = await fetch(randCecan).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/cecan.jpeg', data)
  res.sendFile(__path +'/tmp/cecan.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/aesthetic', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Aesthetic = JSON.parse(fs.readFileSync(__path +'/data/aesthetic.json'));
  const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
  data = await fetch(randAesthetic).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/aesthetic.jpeg', data)
  res.sendFile(__path +'/tmp/aesthetic.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/cecan/justina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Justina = JSON.parse(fs.readFileSync(__path +'/data/justina.json'));
  const randJus = Justina[Math.floor(Math.random() * Justina.length)];
  data = await fetch(randJus).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/justina.jpeg', data)
  res.sendFile(__path +'/tmp/justina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/sagiri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sagiri = JSON.parse(fs.readFileSync(__path +'/data/sagiri.json'));
  const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
  data = await fetch(randSagiri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sagiri.jpeg', data)
  res.sendFile(__path +'/tmp/sagiri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shota', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Shota = JSON.parse(fs.readFileSync(__path +'/data/shota.json'));
  const randShota = Shota[Math.floor(Math.random() * Shota.length)];
  data = await fetch(randShota).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/shota.jpeg', data)
  res.sendFile(__path+ '/tmp/shota.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/loli', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Lol = JSON.parse(fs.readFileSync(__path +'/data/nsfwloli.json'));
  const randLol = Lol[Math.floor(Math.random() * Lol.length)];
  data = await fetch(randLol).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/lol.jpeg', data)
  res.sendFile(__path+ '/tmp/lol.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/hinata', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Hinata = JSON.parse(fs.readFileSync(__path +'/data/hinata.json'));
  const randHin = Hinata[Math.floor(Math.random() * Hinata.length)];
  data = await fetch(randHin).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/Hinata.jpeg', data)
  res.sendFile(__path+ '/tmp/Hinata.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get("/wallpaper/nekonime", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = `https://leyscoders-api.herokuapp.com/api/nekonime?apikey=IkyOgiwara`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nekonime.jpeg', data)
    res.sendFile(__path +'/tmp/nekonime.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/darkjoke", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/darkjokes?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/darkjoke.jpeg', data)
    res.sendFile(__path +'/tmp/darkjoke.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/darkjokes", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.dapuhy.xyz/api/randomimage/darkjokes?apikey=SayuBotz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/darkjokes.jpeg', data)
    res.sendFile(__path +'/tmp/darkjokes.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/batues", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.dapuhy.xyz/api/randomimage/batues?apikey=SayuBotz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/batues.jpeg', data)
    res.sendFile(__path +'/tmp/batues.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/exontol", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.dapuhy.xyz/api/randomimage/exontol?apikey=SayuBotz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/exontol.jpeg', data)
    res.sendFile(__path +'/tmp/exontol.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/quotesyt", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.dapuhy.xyz/api/randomimage/quotesyt?apikey=SayuBotz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/quotesyt.jpeg', data)
    res.sendFile(__path +'/tmp/quotesyt.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/darkmeme", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://hardianto.xyz/api/darkmeme?apikey=hardianto' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/darkmeme.jpeg', data)
    res.sendFile(__path +'/tmp/darkmeme.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/memeindo", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/memeindo?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/memeindo.jpeg', data)
    res.sendFile(__path +'/tmp/memeindo.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/renungan", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/renungan?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/renungan.jpeg', data)
    res.sendFile(__path +'/tmp/renungan.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/quotesimage", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/quotesimage?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/quotesimage.jpeg', data)
    res.sendFile(__path +'/tmp/quotesimage.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/katakataimage", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/katakataimage?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/katakataimage.jpeg', data)
    res.sendFile(__path +'/tmp/katakataimage.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/wallpaperhacker", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/wallpaperhacker?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/wallpaperhacker.jpeg', data)
    res.sendFile(__path +'/tmp/wallpaperhacker.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/wallpaperhacker2", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/wallpaperhacker2?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/wallpaperhacker2.jpeg', data)
    res.sendFile(__path +'/tmp/wallpaperhacker2.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/wallpaperharley", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/wallpaperharley?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/wallpaperharley.jpeg', data)
    res.sendFile(__path +'/tmp/wallpaperharley.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/wallpaperjoker", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/wallpaperjoker?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/wallpaperjoker.jpeg', data)
    res.sendFile(__path +'/tmp/wallpaperjoker.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/wallpaperhp", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/wallpaperhp?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/wallpaperhp.jpeg', data)
    res.sendFile(__path +'/tmp/wallpaperhp.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/wallpaperhp2", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/wallpaperhp2?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/wallpaperhp2.jpeg', data)
    res.sendFile(__path +'/tmp/wallpaperhp2.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomimage/yulibocil", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomimage/yulibocil?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/yulibocil.jpeg', data)
    res.sendFile(__path +'/tmp/yulibocil.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/random/quotes2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kocakz.herokuapp.com/api/random/text/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-ar2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=ar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-en2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=eng`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-jp2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=jp`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-ind2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=id`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi4', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=ar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi3', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=ph`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=en`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=id`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/info/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/drakorasia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fakedata', async (req, res, next) => {
        var Apikey = req.query.apikey,
            country = req.query.country
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/hilih', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/info/kbbi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidindo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidworld', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/randomimage/meme', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kodepos', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/translate', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/anime/kusonime', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/anime/loli', async(req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
    } else {
      res.json(loghandler.invalidKey)
    }
});


router.get('/anime/manga', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/game/caklontong', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/game/asahotak', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://hardianto.xyz/api/asahotak?apikey=hardianto`))
        .then(response => response.json())
        .then(data => {
        var result = data.math;
             res.json({
             	status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/game/susunkata', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://hardianto.xyz/api/susunkata?apikey=hardianto`))
        .then(response => response.json())
        .then(data => {
        var result = data.math;
             res.json({
             	status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/game/siapakahaku', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://hardianto.xyz/api/siapaaku?apikey=hardianto`))
        .then(response => response.json())
        .then(data => {
        var result = data.math;
             res.json({
             	status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/game/tebakanime', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/game/tebakkabupaten', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://apidhani.herokuapp.com/api/game/tebakkabupaten?apikey=NisaaCantik`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/game/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
  } else {
  res.json(loghandler.invalidKey)
  }
})

/**
* @Maker
**/

router.get('/textpro/logowolfblackwhite', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/naturalleaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logowolfgalaxy', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/magma', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hallowen-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/brokenglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/artpapercut', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/artpapercut?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/artpapercut.jpg', data)
  res.sendFile(__path +'/tmp/artpapercut.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
  
router.get('/textpro/glossy', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/watercolor', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/watercolor?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/watercolor.jpg', data)
  res.sendFile(__path +'/tmp/watercolor.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/multicolor3d', async(req, res, next) => {

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/multicolor3d?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/multicolor3d.jpg', data)
  res.sendFile(__path +'/tmp/multicolor3d.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/neondevil', async(req, res, next) => {

const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/neondevil?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neondevil.jpg', data)
  res.sendFile(__path +'/tmp/neondevil.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/sky', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/luxury', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/realisticvintage', async(req, res, next) => {

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/realisticvintage?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/realisticvintage.jpg', data)
  res.sendFile(__path +'/tmp/realisticvintage.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/writingchalk', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/writingchalk?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/writingchalk.jpg', data)
  res.sendFile(__path +'/tmp/writingchalk.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/engraved', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glue', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/minios', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/holographic', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/deluxe-silver', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/fabric', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wicker', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/wicker-text-effect-online-932.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/larva', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/lava-text-effect-online-914.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/toxic', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/stroberi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/strawberry-text-effect-online-889.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/koi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/koi-fish-text-effect-online-888.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bread', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/bread-text-effect-online-887.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hororblood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/honey', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/honey-text-effect-868.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/ice', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/ice-cold-text-effect-862.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/rusty', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/rusty-metal-text-effect-860.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dstone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/1917', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/1917?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/1917.jpg', data)
  res.sendFile(__path +'/tmp/1917.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/space', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/jokerlogo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-joker-online-934.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hallowen', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/blood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/astone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/ninjalogo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-ninja-logo-online-935.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/lionlogo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/avengerslogo', async(req, res, next) => {

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/avengers?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/avengerslogo.jpg', data)
  res.sendFile(__path +'/tmp/avengerslogo.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/marvellogo2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/marvellogo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/neonlight', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/neonlight?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neonlight.jpg', data)
  res.sendFile(__path +'/tmp/neonlight.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/thunder', async(req, res, next) => {

const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/thunder?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/thunder.jpg', data)
  res.sendFile(__path +'/tmp/thunder.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/blackpink', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/blackpink?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blackpinktok.jpg', data)
  res.sendFile(__path +'/tmp/blackpinktok.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/dropwater', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/christmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/pornhub', async(req, res, next) => {

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/pornhub?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pornhub.jpg', data)
  res.sendFile(__path +'/tmp/pornhub.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
  
router.get('/randomimage/kemono', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://x-restapi.herokuapp.com/api/random-kemono?apikey=BETA`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.link;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/cecan/Indonesia', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

  let hasil = `https://apidhani.herokuapp.com/api/cecan/indonesia?apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/Indonesia.jpg', data)
  res.sendFile(__path +'/tmp/Indonesia.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/cecan/vietnam', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

  let hasil = `https://apidhani.herokuapp.com/api/cecan/vietnam?apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/vietnam.jpg', data)
  res.sendFile(__path +'/tmp/vietnam.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/cecan/thailand', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

  let hasil = `https://apidhani.herokuapp.com/api/cecan/thailand?apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/thailand.jpg', data)
  res.sendFile(__path +'/tmp/thailand.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/cecan/korea', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

  let hasil = `https://apidhani.herokuapp.com/api/cecan/korea?apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/korea.jpg', data)
  res.sendFile(__path +'/tmp/korea.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/cecan/china', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

  let hasil = `https://apidhani.herokuapp.com/api/cecan/china?apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/china.jpg', data)
  res.sendFile(__path +'/tmp/china.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/cecan/japan', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

  let hasil = `https://apidhani.herokuapp.com/api/cecan/japan?apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/japan.jpg', data)
  res.sendFile(__path +'/tmp/japan.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/cecan/malaysia', async(req, res, next) => {
  var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

  let hasil = `https://apidhani.herokuapp.com/api/cecan/malaysia?apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/malaysia.jpg', data)
  res.sendFile(__path +'/tmp/malaysia.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/zombie3d', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/zombie3d?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/zombie3d.jpg', data)
  res.sendFile(__path +'/tmp/zombie3d.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/snake', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/snake?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/snake.jpg', data)
  res.sendFile(__path +'/tmp/snake.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/wordgreen', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/wordgreen?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/wordgreen.jpg', data)
  res.sendFile(__path +'/tmp/wordgreen.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/cloud', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/cloud?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cloud.jpg', data)
  res.sendFile(__path +'/tmp/cloud.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/metal', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/metal?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/metal.jpg', data)
  res.sendFile(__path +'/tmp/metal.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/neon', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/neon?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neon.jpg', data)
  res.sendFile(__path +'/tmp/neon.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/graffiticolor', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/graffiticolor?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/graffiticolor.jpg', data)
  res.sendFile(__path +'/tmp/graffiticolor.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/lightgalaxy', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/lightgalaxy?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/lightgalaxy.jpg', data)
  res.sendFile(__path +'/tmp/lightgalaxy.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/hotmetalic', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/hotmetalic?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hotmetalic.jpg', data)
  res.sendFile(__path +'/tmp/hotmetalic.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/graffiti5', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/graffiti5?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/graffiti5.jpg', data)
  res.sendFile(__path +'/tmp/graffiti5.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/graffiti3', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/graffiti3?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/graffiti3.jpg', data)
  res.sendFile(__path +'/tmp/graffiti3.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/graffiti', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/graffiti?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/graffiti.jpg', data)
  res.sendFile(__path +'/tmp/graffiti.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/startsnight', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/startsnight?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/startsnight.jpg', data)
  res.sendFile(__path +'/tmp/startsnight.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/cake', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/cake?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cake.jpg', data)
  res.sendFile(__path +'/tmp/cake.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/birthdaycake', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/birthdaycake?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/birthdaycake.jpg', data)
  res.sendFile(__path +'/tmp/birthdaycake.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/3dhologram', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/3dhologram?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/3dhologram.jpg', data)
  res.sendFile(__path +'/tmp/3dhologram.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/galaxystyle', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/galaxystyle?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/galaxystyle.jpg', data)
  res.sendFile(__path +'/tmp/galaxystyle.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/lighteffects', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/lighteffects?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/lighteffects.jpg', data)
  res.sendFile(__path +'/tmp/lighteffects.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/greenbrush', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/greenbrush?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/greenbrush.jpg', data)
  res.sendFile(__path +'/tmp/greenbrush.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/cakes', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/cakes?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cakes.jpg', data)
  res.sendFile(__path +'/tmp/cakes.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/startsnight2', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/startsnight2?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/startsnight2.jpg', data)
  res.sendFile(__path +'/tmp/startsnight2.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/glowing', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/glowing?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/glowing.jpg', data)
  res.sendFile(__path +'/tmp/glowing.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/wetglass', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/wetglass?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/wetglass.jpg', data)
  res.sendFile(__path +'/tmp/wetglass.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/blackpinkneon', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/blackpinkneon?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blackpinkneon.jpg', data)
  res.sendFile(__path +'/tmp/blackpinkneon.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/3dcrack', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/3dcrack?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/3dcrack.jpg', data)
  res.sendFile(__path +'/tmp/3dcrack.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/3dunderwater', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/3dunderwater?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/3dunderwater.jpg', data)
  res.sendFile(__path +'/tmp/3dunderwater.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/bearlogo', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/bearlogo?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bearlogo.jpg', data)
  res.sendFile(__path +'/tmp/bearlogo.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/graffiti2', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/graffiti2?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/graffiti2.jpg', data)
  res.sendFile(__path +'/tmp/graffiti2.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/clouds', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/clouds?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/clouds.jpg', data)
  res.sendFile(__path +'/tmp/clouds.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/pubgmascot', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/pubgmascot?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pubgmascot.jpg', data)
  res.sendFile(__path +'/tmp/pubgmascot.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/summerbeach', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/summerbeach?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/summerbeach.jpg', data)
  res.sendFile(__path +'/tmp/summerbeach.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/summerbeach2', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/summerbeach2?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/summerbeach2.jpg', data)
  res.sendFile(__path +'/tmp/summerbeach2.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/glow', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/glow?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/glow.jpg', data)
  res.sendFile(__path +'/tmp/glow.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/wooden3d', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/wooden3d?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/wooden3d.jpg', data)
  res.sendFile(__path +'/tmp/wooden3d.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/galaxy', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/galaxy?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/galaxy.jpg', data)
  res.sendFile(__path +'/tmp/galaxy.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/galaxybat', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/galaxybat?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/galaxybat.jpg', data)
  res.sendFile(__path +'/tmp/galaxybat.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/brokenglass', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/brokenglass?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/brokenglass.jpg', data)
  res.sendFile(__path +'/tmp/brokenglass.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/paulscholes', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/paulscholes?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/paulscholes.jpg', data)
  res.sendFile(__path +'/tmp/paulscholes.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/captainamerica', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/captainamerica?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/captainamerica.jpg', data)
  res.sendFile(__path +'/tmp/captainamerica.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/tiktok', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/tiktok?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tiktok.jpg', data)
  res.sendFile(__path +'/tmp/tiktok.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/3dwood', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/3dwood?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/3dwood.jpg', data)
  res.sendFile(__path +'/tmp/3dwood.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/graffiti4', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/graffiti4?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/graffiti4.jpg', data)
  res.sendFile(__path +'/tmp/graffiti4.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/graffiti6', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/graffiti6?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/graffiti6.jpg', data)
  res.sendFile(__path +'/tmp/graffiti6.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/ephoto/juventus', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/ephoto/juventus?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/juventus.jpg', data)
  res.sendFile(__path +'/tmp/juventus.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/blackpink', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const pop = JSON.parse(fs.readFileSync(__path +'/data/kpop.json'));
    const Pop = pop[Math.floor(Math.random() * pop.length)];
    let hasil = Pop.pop;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/pink.jpeg', data)
    res.sendFile(__path +'/tmp/pink.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

//Random Video

router.get("/randomvideo/bokep", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/bokep?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/bokep.mp4', data)
    res.sendFile(__path +'/tmp/bokep.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/beatvn", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/beatvn?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/beatvn.mp4', data)
    res.sendFile(__path +'/tmp/beatvn.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/jedagjedugff", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/jedagjedugff?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/jedagjedugff.mp4', data)
    res.sendFile(__path +'/tmp/jedagjedugff.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/jedagjedugml", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/jedagjedugml?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/jedagjedugml.mp4', data)
    res.sendFile(__path +'/tmp/jedagjedugml.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/jedagjedugpubg", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/jedagjedugpubg?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/jedagjedugpubg.mp4', data)
    res.sendFile(__path +'/tmp/jedagjedugpubg.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/storysholawatan", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/storysholawatan?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/storysholawatan.mp4', data)
    res.sendFile(__path +'/tmp/storysholawatan.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/storywa", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/storywa?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/storywa.mp4', data)
    res.sendFile(__path +'/tmp/storywa.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/storygalau", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/storygalau?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/storygalau.mp4', data)
    res.sendFile(__path +'/tmp/storygalau.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/storyanime", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/storyanime?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/storyanime.mp4', data)
    res.sendFile(__path +'/tmp/storyanime.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/storytruk", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/storytruk?apikey=APIKEY' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/storytruk.mp4', data)
    res.sendFile(__path +'/tmp/storytruk.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/randomvideo/storybus", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/randomvideo/storybus?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/storybus.mp4', data)
    res.sendFile(__path +'/tmp/storybus.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/historytime', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
  const Historytime = JSON.parse(fs.readFileSync(__path +'/data/historytime.json'));
  const randHistorytime = Historytime[Math.floor(Math.random() * Historytime.length)];
  data = await fetch(randHistorytime).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/historytime.mp4', data)
  res.sendFile(__path +'/tmp/historytime.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});

// Asupan

router.get('/asupan', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
  const Asupan = JSON.parse(fs.readFileSync(__path +'/data/asupantiktok.json'));
  const randAsupan = Asupan[Math.floor(Math.random() * Asupan.length)];
  data = await fetch(randAsupan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
  res.sendFile(__path +'/tmp/asupan.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/asupanbocil", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/asupan/bocil?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupanbocil.mp4', data)
    res.sendFile(__path +'/tmp/asupanbocil.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/asupanloli", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/asupan/asupanloli?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupanloli.mp4', data)
    res.sendFile(__path +'/tmp/asupanloli.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/asupanhijaber", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupanhijaber.jpg', data)
    res.sendFile(__path +'/tmp/asupanhijaber.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/asupanrikagusriani", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/asupan/rikagusriani?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupanrikagusriani.mp4', data)
    res.sendFile(__path +'/tmp/asupanrikagusriani.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/asupansantuy", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/asupan/santuy?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupansantuy.mp4', data)
    res.sendFile(__path +'/tmp/asupansantuy.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/asupanukhty", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/asupan/ukhty?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupanukhty.mp4', data)
    res.sendFile(__path +'/tmp/asupanukhty.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/asupannantalia", async (req, res, next) => {
  
  apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://apidhani.herokuapp.com/api/asupan/nantalia?apikey=NisaaCantik' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupannantalia.mp4', data)
    res.sendFile(__path +'/tmp/asupannantalia.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/maker/nulis", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = `https://api.dapuhy.xyz/api/maker/nulis?text=${text}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
    res.sendFile(__path +'/tmp/nulis.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/maker/nuliskanan", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = `https://api.dapuhy.xyz/api/maker/nuliskanan?text=${text}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nuliskanan.jpeg', data)
    res.sendFile(__path +'/tmp/nuliskanan.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/maker/nuliskiri", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = `https://api.dapuhy.xyz/api/maker/nuliskiri?text=${text}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nuliskiri.jpeg', data)
    res.sendFile(__path +'/tmp/nuliskiri.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/maker/foliokanan", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = `https://api.dapuhy.xyz/api/maker/foliokanan?text=${text}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/foliokanan.jpeg', data)
    res.sendFile(__path +'/tmp/foliokanan.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/maker/foliokiri", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = `https://api.dapuhy.xyz/api/maker/foliokiri?text=${text}&apikey=SayuBotz`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/foliokiri.jpeg', data)
    res.sendFile(__path +'/tmp/foliokiri.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/ttp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://hardianto.xyz/api/maker/ttp?text=${text}&apikey=hardianto`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ttp.png', data)
  res.sendFile(__path +'/tmp/ttp.png')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/attp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://hardianto.xyz/api/maker/attp?text=${text}&apikey=hardianto`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/girlneko', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://ziy.herokuapp.com/api/maker/girlneko?text1=${text1}&text2=${text2}&apikey=xZiyy`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/girlneko.jpg', data)
  res.sendFile(__path +'/tmp/girlneko.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/sadboy', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${text1}&text2=${text2}&apikey=xZiyy`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sadboy.jpg', data)
  res.sendFile(__path +'/tmp/sadboy.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/kaneki', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${text}&apikey=xZiyy`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kaneki.jpg', data)
  res.sendFile(__path +'/tmp/kaneki.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/rem', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://ziy.herokuapp.com/api/maker/rem?nama=${text}&apikey=xZiyy`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rem.jpg', data)
  res.sendFile(__path +'/tmp/rem.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/gura', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://apidhani.herokuapp.com/api/maker/gura?text=${text}&apikey=NisaaCantik`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gura.jpg', data)
  res.sendFile(__path +'/tmp/gura.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/tts', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/maker/tts?text=DaniGanz&lang=id&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tts.mp3', data)
  res.sendFile(__path +'/tmp/tts.mp3')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textpro/matrix', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://apidhani.herokuapp.com/api/textpro/matrix?apikey=NisaaCantik&text=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/textpro/transformer', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/berry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/layered', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/impressiveglitch', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dgradient', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/write', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wonderfulgraffiti', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/christmasholiday', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/americanflag', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-american-flag-3d-text-effect-online-1051.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dscifi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3drainbow', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dwaterpipe', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/neonlightglitch', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/neonlight', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glowingneonlight', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dgoldenancient', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/leddisplayscreen', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/color-led-display-screen-text-effect-1059.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/happynewyear', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/happy-new-year-2022-greeting-3d-card-1058.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/christmascandy', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dchristmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/merrychristmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3ddeep', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dflag', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/free-online-country-flag-3d-text-effect-generator-1052.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/sketch', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/snow', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/cloud', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/deluxegold', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/deluxe-gold-text-effect-966.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glossycarbon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/happnewyearcard', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/happ-new-year-card-firework-gif-959.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/skeleton', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/skeleton-text-effect-online-929.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/balloon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/fullcolor-balloon-text-effect-958.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/redfoilballoon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/red-foil-balloon-text-effect-928.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purplefoilballoon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-foil-balloon-text-effect-927.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/pinkfoilballoon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pink-foil-balloon-text-effect-926.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/greenfoilballoon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/green-foil-balloon-text-effect-925.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/cyanfoilballoon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/cyan-foil-balloon-text-effect-924.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bluefoilballoon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blue-foil-balloon-text-effect-923.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/goldfoilballoon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/gold-foil-balloon-text-effect-922.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/steel', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/steel-text-effect-online-921.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/ultragloss', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/ultra-gloss-text-effect-online-920.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/denim', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/denim-text-effect-online-919.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/avatargold', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-avatar-gold-online-956.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/xmascards', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/xmas-cards-3d-online-942.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/firework', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/neon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/neon-text-effect-online-879.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/metaldarkgold', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/metal-dark-gold-text-effect-984.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/1917', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/minion', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/doubleexposure', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/double-exposure-text-effect-black-white-976.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/decorategreen', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/decorate-green-text-effect-918.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/decoratepurple', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/decorate-purple-text-effect-917.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/peridotstone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/peridot-stone-text-effect-916.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/rock', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/rock-text-effect-online-915.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/yellowglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/yellow-glass-text-effect-913.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purpleglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-glass-text-effect-912.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/orangeglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/orange-glass-text-effect-911.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/greenglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/green-glass-text-effect-910.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/cyanglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/cyan-glass-text-effect-909.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/blueglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blue-glass-text-effect-908.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/redglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/red-glass-text-effect-907.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purpleshiny', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-shiny-glass-text-effect-906.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/captainamerica', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/captain-america-text-effect-905.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/robot', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/robot-r2-d2-text-effect-903.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/rainbowequalizer', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/rainbow-equalizer-text-effect-902.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/pinksparklingjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pink-sparkling-jewelry-text-effect-899.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bluesparklingjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blue-sparkling-jewelry-text-effect-898.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/greensparklingjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/green-sparkling-jewelry-text-effect-897.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purplesparklingjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-sparkling-jewelry-text-effect-896.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/goldsparklingjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/gold-sparkling-jewelry-text-effect-895.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/redsparklingjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/red-sparkling-jewelry-text-effect-894.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/cyansparklingjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purpleglass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-glass-text-effect-online-892.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/decorative', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/decorative-glass-text-effect-891.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/roadwarning', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/road-warning-text-effect-878.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bokeh', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/bokeh-text-effect-876.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/greenneon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/green-neon-text-effect-874.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/advanced', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/dropwater', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bagel', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/bagel-text-effect-857.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/wood-text-effect-856.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/metalrainbow', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/metal-rainbow-text-effect-854.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purplegem', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-gem-text-effect-853.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/shinymetal', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/shiny-metal-text-effect-852.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/yellowjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/yellow-jewelry-text-effect-851.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/silverjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/silver-jewelry-text-effect-850.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/redjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/red-jewelry-text-effect-849.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purplejewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-jewelry-text-effect-848.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/orangejewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/orange-jewelry-text-effect-847.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/greenjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/green-jewelry-text-effect-846.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/cyanjewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/cyan-jewelry-text-effect-845.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bluejewelry', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blue-jewelry-text-effect-844.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hotmetal', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/hot-metal-text-effect-843.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hexagolden', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/hexa-golden-text-effect-842.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/blueglitter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blue-glitter-text-effect-841.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/purpleglitter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/purple-glitter-text-effect-840.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/pinkglitter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pink-glitter-text-effect-839.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/greenglitter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/green-glitter-text-effect-838.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/silverglitter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/silver-glitter-text-effect-837.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/goldglitter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/gold-glitter-text-effect-836.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bronzeglitter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/bronze-glitter-text-effect-835.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/erodedmetal', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/eroded-metal-text-effect-834.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glitch', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/coolgraffiti', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/coolwallgraffiti', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dretro', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thor', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/halloweenspooky', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/horrorcinematic', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dmetal', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-text-logo-3d-metal-online-957.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dmetalsilver', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/text-logo-3d-metal-silver-946.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dmetalrose', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/text-logo-3d-metal-rose-gold-945.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dmetalgold', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/text-logo-3d-metal-gold-944.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dmetalgalaxy', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/text-logo-3d-metal-galaxy-943.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dsteel', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-steel-text-effect-877.html", [
    text1, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/retroneon', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const text3 = req.query.text3;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!text3) return res.json(loghandler.nottext3)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/80-s-retro-neon-text-effect-online-979.html", [
    text1, text2, text3
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

//Photooxy

router.get('/photooxy/shadow', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/shadow?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shadow.jpg', data)
  res.sendFile(__path +'/tmp/shadow.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/romantic', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/romantic?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/romantic.jpg', data)
  res.sendFile(__path +'/tmp/romantic.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/smoke', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/smoke?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/smoke.jpg', data)
  res.sendFile(__path +'/tmp/smoke.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/burnpaper', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/burnpaper?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/burnpaper.jpg', data)
  res.sendFile(__path +'/tmp/burnpaper.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/lovemessage', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/lovemessage?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/lovemessage.jpg', data)
  res.sendFile(__path +'/tmp/lovemessage.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/undergrass', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/undergrass?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/undergrass.jpg', data)
  res.sendFile(__path +'/tmp/undergrass.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/doubleheart', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/doubleheart?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/doubleheart.jpg', data)
  res.sendFile(__path +'/tmp/doubleheart.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/coffecup', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/coffecup?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/coffecup.jpg', data)
  res.sendFile(__path +'/tmp/coffecup.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/coffecup2', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/coffecup2?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/coffecup2.jpg', data)
  res.sendFile(__path +'/tmp/coffecup2.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/butterfly', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/butterfly?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/butterfly.jpg', data)
  res.sendFile(__path +'/tmp/butterfly.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/cup', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/cup?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cup.jpg', data)
  res.sendFile(__path +'/tmp/cup.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/cup2', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/cup2?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cup2.jpg', data)
  res.sendFile(__path +'/tmp/cup2.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/wolfmetal', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/wolfmetal?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/wolfmetal.jpg', data)
  res.sendFile(__path +'/tmp/wolfmetal.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/underwater', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/underwater?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/underwater.jpg', data)
  res.sendFile(__path +'/tmp/underwater.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/harrypotter', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/harrypotter?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/harrypotter.jpg', data)
  res.sendFile(__path +'/tmp/harrypotter.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/roses', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/roses?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/roses.jpg', data)
  res.sendFile(__path +'/tmp/roses.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/whitecube', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/whitecube?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/whitecube.jpg', data)
  res.sendFile(__path +'/tmp/whitecube.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/nightsky', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/nightsky?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/nightsky.jpg', data)
  res.sendFile(__path +'/tmp/nightsky.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/flaming', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/flaming?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/flaming.jpg', data)
  res.sendFile(__path +'/tmp/flaming.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/naruto', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/naruto?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/naruto.jpg', data)
  res.sendFile(__path +'/tmp/naruto.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/csgobanner', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/csgobanner?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/csgobanner.jpg', data)
  res.sendFile(__path +'/tmp/csgobanner.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/greenleaves', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/greenleaves?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/greenleaves.jpg', data)
  res.sendFile(__path +'/tmp/greenleaves.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/lolbanner', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/lolbanner?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/lolbanner.jpg', data)
  res.sendFile(__path +'/tmp/lolbanner.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/glitch', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/glitch?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/asep.jpg', data)
  res.sendFile(__path +'/tmp/asep.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/8bit', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/8bit?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/8bit.jpg', data)
  res.sendFile(__path +'/tmp/8bit.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/photooxy/pubglogo', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/photooxy/pubg?text1=${text1}&text2=${text2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pubglogo.jpg', data)
  res.sendFile(__path +'/tmp/pubglogo.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/silverbutton', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://apidhani.herokuapp.com/api/maker/silverplaybutton?apikey=NisaaCantik&text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/splaybutton.jpg', data)
  res.sendFile(__path +'/tmp/splaybutton.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/goldbutton', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://apidhani.herokuapp.com/api/maker/goldplaybutton?apikey=NisaaCantik&text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ppp.jpg', data)
  res.sendFile(__path +'/tmp/ppp.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/harta-tahta', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/maker/hartatahta?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ok.jpg', data)
  res.sendFile(__path +'/tmp/ok.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/harta-tahta-custom', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/maker/hartacustom?text=${text}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cok.jpg', data)
  res.sendFile(__path +'/tmp/cok.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/welcome', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const gcicon = req.query.gcicon;
  
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/welcome1?pp=${pp}&nama=${username}&namagc=${gcname}&ppgc=${gcicon}&bg=${bg}&member=${memberCount}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome.png', data)
        res.sendFile(__path+'/tmp/welcome.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/goodbye', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const gcicon = req.query.gcicon;
  
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/goodbye1?pp=${pp}&nama=${username}&namagc=${gcname}&ppgc=${gcicon}&bg=${bg}&member=${memberCount}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
        res.sendFile(__path+'/tmp/goodbye.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/welcome2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/welcome2?pp=${pp}&nama=${username}&bg=${bg}&namagc=${gcname}&member=${memberCount}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome2.png', data)
        res.sendFile(__path+'/tmp/welcome2.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/goodbey2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/goodbye2?pp=${pp}&nama=${username}&bg=${bg}&member=${memberCount}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodbey2.png', data)
        res.sendFile(__path+'/tmp/goodbey2.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/welcome3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const mem = req.query.mem;
  const msg = req.query.msg;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!mem) return res.json(loghandler.mem)
  if(!msg) return res.json(loghandler.msg)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/welcome3?picurl=${pp}&name=${username}&mem=${mem}&msg=${msg}&bgurl=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome3.png', data)
        res.sendFile(__path+'/tmp/welcome3.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/goodbey3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const mem = req.query.mem;
  const msg = req.query.msg;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!mem) return res.json(loghandler.mem)
  if(!msg) return res.json(loghandler.msg)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/goodbye3?picurl=${pp}&name=${username}&mem=${mem}&msg=${msg}&bgurl=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodbye3.png', data)
        res.sendFile(__path+'/tmp/goodbye3.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/welcome4', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const mem = req.query.mem;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!mem) return res.json(loghandler.mem)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/welcome4?picurl=${pp}&name=${username}&mem=${mem}&bgurl=${bg}&gcname=${gcname}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome4.png', data)
        res.sendFile(__path+'/tmp/welcome4.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/goodbey4', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const mem = req.query.mem;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!mem) return res.json(loghandler.mem)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/goodbye4?picurl=${pp}&name=${username}&mem=${mem}&bgurl=${bg}&gcname=${gcname}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodbey4.png', data)
        res.sendFile(__path+'/tmp/goodbey4.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/promote', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const gcicon = req.query.gcicon;
  
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/promote1?pp=${pp}&nama=${username}&namagc=${gcname}&ppgc=${gcicon}&bg=${bg}&member=${memberCount}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/promote.png', data)
        res.sendFile(__path+'/tmp/promote.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/demote', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const gcicon = req.query.gcicon;
  
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/demote1?pp=${pp}&nama=${username}&namagc=${gcname}&ppgc=${gcicon}&bg=${bg}&member=${memberCount}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/demote.png', data)
        res.sendFile(__path+'/tmp/demote.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/promote2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const mem = req.query.mem;
  const msg = req.query.msg;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!mem) return res.json(loghandler.mem)
  if(!msg) return res.json(loghandler.msg)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/promote2?picurl=${pp}&name=${username}&mem=${mem}&msg=${msg}&bgurl=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/promote2.png', data)
        res.sendFile(__path+'/tmp/promote2.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/demote2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const mem = req.query.mem;
  const msg = req.query.msg;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!mem) return res.json(loghandler.mem)
  if(!msg) return res.json(loghandler.msg)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/demote2?picurl=${pp}&name=${username}&mem=${mem}&msg=${msg}&bgurl=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/demote2.png', data)
        res.sendFile(__path+'/tmp/demote2.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/verification', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const gcicon = req.query.gcicon;
  
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/verification1?pp=${pp}&nama=${username}&namagc=${gcname}&ppgc=${gcicon}&bg=${bg}&member=${memberCount}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/verify.png', data)
        res.sendFile(__path+'/tmp/verify.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/verification2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const mem = req.query.mem;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  
  if(!username) return res.json(loghandler.notusername)
  if(!mem) return res.json(loghandler.mem)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/verification2?picurl=${pp}&name=${username}&mem=${mem}&bgurl=${bg}&gcname=${gcname}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/verify2.png', data)
        res.sendFile(__path+'/tmp/verify2.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/level', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const needxp = req.query.needxp;
  const currxp = req.query.currxp;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const level = req.query.level;
  const logorank = req.query.logorank;
  
  if(!username) return res.json(loghandler.notusername)
  if(!needxp) return res.json(loghandler.needxp)
  if(!currxp) return res.json(loghandler.currxp)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!level) return res.json(loghandler.level)
  if(!logorank) return res.json(loghandler.logorank)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/level?pp=${pp}&nama=${username}&bg=${bg}&needxp=${needxp}&currxp=${currxp}&level=${level}&logorank=${logorank}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/level.png', data)
        res.sendFile(__path+'/tmp/level.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/levelup', async(req, res, next) => {
  const apikey = req.query.apikey;
  const pp = req.query.pp;
  
  if(!pp) return res.json(loghandler.pp)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://ziy.herokuapp.com/api/canvas/levelup?pp=${pp}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/levelup.png', data)
        res.sendFile(__path+'/tmp/levelup.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/emoji2png', async(req, res, next) => {
  const apikey = req.query.apikey;
  const Emoji = req.query.text;
  
  if(!apikey) return jes.json(loghandler.notparam)
  if(!Emoji) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)) {

    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/web2plain-text', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/picture', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/picture?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/picture.jpg', data)
  res.sendFile(__path +'/tmp/picture.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/affect', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/affect?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/affect.jpg', data)
  res.sendFile(__path +'/tmp/affect.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/invert', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/invert?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/invert.jpg', data)
  res.sendFile(__path +'/tmp/invert.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/hitler', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/hitler?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hitler.jpg', data)
  res.sendFile(__path +'/tmp/hitler.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/sepia', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/sepia?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sepia.jpg', data)
  res.sendFile(__path +'/tmp/sepia.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/blur', async(req, res, next) => {

  const img = req.query.img;
  const level = req.query.level;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!level) return res.json(loghandler.level)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/blur?url=${img}&level=${level}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blur.jpg', data)
  res.sendFile(__path +'/tmp/blur.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/circle', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/circle?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/circle.jpg', data)
  res.sendFile(__path +'/tmp/circle.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/trash', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/trash?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/trash.jpg', data)
  res.sendFile(__path +'/tmp/trash.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/wanted', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/wanted?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/wanted.jpg', data)
  res.sendFile(__path +'/tmp/wanted.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/joke', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/joke?url=${img}&apikey=IkyOgiwara`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/joke.jpg', data)
  res.sendFile(__path +'/tmp/joke.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/triggered', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/triggered?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/triggered.gif', data)
  res.sendFile(__path +'/tmp/triggered.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/hacker', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/hacker?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hacker.jpg', data)
  res.sendFile(__path +'/tmp/hacker.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/hacker2', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/hacker2?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hacker2.jpg', data)
  res.sendFile(__path +'/tmp/hacker2.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/gay', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/gay?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gay.jpg', data)
  res.sendFile(__path +'/tmp/gay.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/greyscale', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/greyscale?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/greyscale.jpg', data)
  res.sendFile(__path +'/tmp/greyscale.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/crush', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/crush?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/crush.jpg', data)
  res.sendFile(__path +'/tmp/crush.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/approved', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/approved?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/approved.jpg', data)
  res.sendFile(__path +'/tmp/approved.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/airpods', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/airpods?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/airpods.jpg', data)
  res.sendFile(__path +'/tmp/airpods.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/meth', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/meth?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/meth.jpg', data)
  res.sendFile(__path +'/tmp/meth.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/communism', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/communism?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/communism.jpg', data)
  res.sendFile(__path +'/tmp/communism.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/bjp', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/bjp?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bjp.jpg', data)
  res.sendFile(__path +'/tmp/bjp.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/captcha', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/captcha?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/captcha.jpg', data)
  res.sendFile(__path +'/tmp/captcha.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/continued', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/continued?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/continued.jpg', data)
  res.sendFile(__path +'/tmp/continued.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/police', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/police?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/police.jpg', data)
  res.sendFile(__path +'/tmp/police.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/linus', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/linus?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/linus.jpg', data)
  res.sendFile(__path +'/tmp/linus.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/what', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/what?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/what.jpg', data)
  res.sendFile(__path +'/tmp/what.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/ad', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/ad?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ad.jpg', data)
  res.sendFile(__path +'/tmp/ad.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/bobross', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/bobross?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bobross.jpg', data)
  res.sendFile(__path +'/tmp/bobross.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/confusedstonk', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/confusedstonk?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/confusedstonk.jpg', data)
  res.sendFile(__path +'/tmp/confusedstonk.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/delete', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/delete?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/delete.jpg', data)
  res.sendFile(__path +'/tmp/delete.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/discordblack', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/discordblack?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/discordblack.jpg', data)
  res.sendFile(__path +'/tmp/discordblack.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/discordblue', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/discordblue?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/discordblue.jpg', data)
  res.sendFile(__path +'/tmp/discordblue.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/facepalm', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/facepalm?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/facepalm.jpg', data)
  res.sendFile(__path +'/tmp/facepalm.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/jail', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/jail?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jail.jpg', data)
  res.sendFile(__path +'/tmp/jail.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/karaba', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/karaba?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/karaba.jpg', data)
  res.sendFile(__path +'/tmp/karaba.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/mms', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/mms?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/mms.jpg', data)
  res.sendFile(__path +'/tmp/mms.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/stonk', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/stonk?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/stonk.jpg', data)
  res.sendFile(__path +'/tmp/stonk.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/notstonk', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/notstonk?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/notstonk.jpg', data)
  res.sendFile(__path +'/tmp/notstonk.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/poutine', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/poutine?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/poutine.jpg', data)
  res.sendFile(__path +'/tmp/poutine.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/rip', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/rip?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rip.jpg', data)
  res.sendFile(__path +'/tmp/rip.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/tatoo', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/tatoo?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tatoo.jpg', data)
  res.sendFile(__path +'/tmp/tatoo.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/thomas', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/thomas?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/thomas.jpg', data)
  res.sendFile(__path +'/tmp/thomas.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/bill', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/bill?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bill.jpg', data)
  res.sendFile(__path +'/tmp/bill.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/udf', async(req, res, next) => {

  const img = req.query.img;
  const apikey = req.query.apikey;
  if(!img) return res.json(loghandler.img)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/udf?img=${img}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/udf.jpg', data)
  res.sendFile(__path +'/tmp/udf.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/batslap', async(req, res, next) => {

  const img1 = req.query.img1;
  const img2 = req.query.img2;
  const apikey = req.query.apikey;
  if(!img1) return res.json(loghandler.img1)
  if(!img2) return res.json(loghandler.img2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/batslap?img1=${img1}&img2=${img2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/batslap.jpg', data)
  res.sendFile(__path +'/tmp/batslap.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/beautiful', async(req, res, next) => {

  const img1 = req.query.img1;
  const img2 = req.query.img2;
  const apikey = req.query.apikey;
  if(!img1) return res.json(loghandler.img1)
  if(!img2) return res.json(loghandler.img2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/beautiful?img1=${img1}&img2=${img2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/beautiful.jpg', data)
  res.sendFile(__path +'/tmp/beautiful.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/bed', async(req, res, next) => {

  const img1 = req.query.img1;
  const img2 = req.query.img2;
  const apikey = req.query.apikey;
  if(!img1) return res.json(loghandler.img1)
  if(!img2) return res.json(loghandler.img2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/bed?img1=${img1}&img2=${img2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bed.jpg', data)
  res.sendFile(__path +'/tmp/bed.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/doublestonk', async(req, res, next) => {

  const img1 = req.query.img1;
  const img2 = req.query.img2;
  const apikey = req.query.apikey;
  if(!img1) return res.json(loghandler.img1)
  if(!img2) return res.json(loghandler.img2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/doublestonk?img1=${img1}&img2=${img2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/doublestonk.jpg', data)
  res.sendFile(__path +'/tmp/doublestonk.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/kiss', async(req, res, next) => {

  const img1 = req.query.img1;
  const img2 = req.query.img2;
  const apikey = req.query.apikey;
  if(!img1) return res.json(loghandler.img1)
  if(!img2) return res.json(loghandler.img2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/kiss?img1=${img1}&img2=${img2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kiss.jpg', data)
  res.sendFile(__path +'/tmp/kiss.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/spank', async(req, res, next) => {

  const img1 = req.query.img1;
  const img2 = req.query.img2;
  const apikey = req.query.apikey;
  if(!img1) return res.json(loghandler.img1)
  if(!img2) return res.json(loghandler.img2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = `https://api.dapuhy.xyz/api/canvas/spank?img1=${img1}&img2=${img2}&apikey=SayuBotz`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/spank.jpg', data)
  res.sendFile(__path +'/tmp/spank.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      premium: 'yes',
      limit: 'Unlimited',
      message: 'If Apikey Spam Will Be Delete'    
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
