const e=Object.freeze({displayName:"Assembly",fileTypes:["asm","nasm","yasm","inc","s"],name:"asm",patterns:[{include:"#registers"},{include:"#mnemonics"},{include:"#constants"},{include:"#entities"},{include:"#support"},{include:"#comments"},{include:"#preprocessor"},{include:"#strings"}],repository:{comments:{patterns:[{match:"(;|(^|\\s)#\\s).*$",name:"comment.line"},{begin:"/\\*",end:"\\*/",name:"comment.block"},{begin:"^\\s*[\\#%]\\s*if\\s+0\\b",end:"^\\s*[\\#%]\\s*endif\\b",name:"comment.preprocessor"}]},constants:{patterns:[{match:"(?i)\\b0[by](?:[01][01_]*)\\.(?:(?:[01][01_]*)?(?:p[+-]?(?:[0-9][0-9_]*))?\\b)?",name:"constant.numeric.binary.floating-point.asm.x86_64"},{match:"(?i)\\b0[by](?:[01][01_]*)(?:p[+-]?(?:[0-9][0-9_]*))\\b",name:"constant.numeric.binary.floating-point.asm.x86_64"},{match:"(?i)\\b0[oq](?:[0-7][0-7_]*)\\.(?:(?:[0-7][0-7_]*)?(?:p[+-]?(?:[0-9][0-9_]*))?\\b)?",name:"constant.numeric.octal.floating-point.asm.x86_64"},{match:"(?i)\\b0[oq](?:[0-7][0-7_]*)(?:p[+-]?(?:[0-9][0-9_]*))\\b",name:"constant.numeric.octal.floating-point.asm.x86_64"},{match:"(?i)\\b(?:0[dt])?(?:[0-9][0-9_]*)\\.(?:(?:[0-9][0-9_]*)?(?:e[+-]?(?:[0-9][0-9_]*))?\\b)?",name:"constant.numeric.decimal.floating-point.asm.x86_64"},{match:"(?i)\\b(?:[0-9][0-9_]*)(?:e[+-]?(?:[0-9][0-9_]*))\\b",name:"constant.numeric.decimal.floating-point.asm.x86_64"},{match:"(?i)\\b(?:[0-9][0-9_]*)p(?:[0-9][0-9_]*)?\\b",name:"constant.numeric.decimal.packed-bcd.asm.x86_64"},{match:"(?i)\\b0[xh](?:[[:xdigit:]][[:xdigit:]_]*)\\.(?:(?:[[:xdigit:]][[:xdigit:]_]*)?(?:p[+-]?(?:[0-9][0-9_]*))?\\b)?",name:"constant.numeric.hex.floating-point.asm.x86_64"},{match:"(?i)\\b0[xh](?:[[:xdigit:]][[:xdigit:]_]*)(?:p[+-]?(?:[0-9][0-9_]*))\\b",name:"constant.numeric.hex.floating-point.asm.x86_64"},{match:"(?i)\\$[0-9]\\_?(?:[[:xdigit:]][[:xdigit:]_]*)?\\.(?:(?:[[:xdigit:]][[:xdigit:]_]*)?(?:p[+-]?(?:[0-9][0-9_]*))?\\b)?",name:"constant.numeric.hex.floating-point.asm.x86_64"},{match:"(?i)\\$[0-9]\\_?(?:[[:xdigit:]][[:xdigit:]_]*)(?:p[+-]?(?:[0-9][0-9_]*))\\b",name:"constant.numeric.hex.floating-point.asm.x86_64"},{match:"(?i)\\b(?:(?:0[by](?:[01][01_]*))|(?:(?:[01][01_]*)[by]))\\b",name:"constant.numeric.binary.asm.x86_64"},{match:"(?i)\\b(?:(?:0[oq](?:[0-7][0-7_]*))|(?:(?:[0-7][0-7_]*)[oq]))\\b",name:"constant.numeric.octal.asm.x86_64"},{match:"(?i)\\b(?:(?:0[dt](?:[0-9][0-9_]*))|(?:(?:[0-9][0-9_]*)[dt]?))\\b",name:"constant.numeric.decimal.asm.x86_64"},{match:"(?i)(?:\\$[0-9]\\_?(?:[[:xdigit:]][[:xdigit:]_]*)?)\\b",name:"constant.numeric.hex.asm.x86_64"},{match:"(?i)\\b(?:(?:0[xh](?:[[:xdigit:]][[:xdigit:]_]*))|(?:(?:[[:xdigit:]][[:xdigit:]_]*)[hxHX]))\\b",name:"constant.numeric.hex.asm.x86_64"}]},entities:{patterns:[{match:"((section|segment)\\s+)?\\.((ro)?data|bss|text)",name:"entity.name.section"},{match:"^\\.?(globa?l|extern|required)\\b",name:"entity.directive"},{match:"(\\$\\w+)\\b",name:"text.variable"},{captures:{1:{name:"punctuation.separator.asm.x86_64 storage.modifier.asm.x86_64"},2:{name:"entity.name.function.special.asm.x86_64"},3:{name:"punctuation.separator.asm.x86_64"}},match:"(\\.\\.@)((?:[[:alpha:]_?](?:[[:alnum:]_$#@~.?]*)))(?:(\\:)?|\\b)",name:"entity.name.function.asm.x86_64"},{captures:{1:{name:"punctuation.separator.asm.x86_64 storage.modifier.asm.x86_64"},2:{name:"entity.name.function.asm.x86_64"},3:{name:"punctuation.separator.asm.x86_64"}},match:"(?:(\\.)?|\\b)((?:[[:alpha:]_?](?:[[:alnum:]_$#@~.?]*)))(?:(\\:))",name:"entity.name.function.asm.x86_64"},{captures:{1:{name:"punctuation.separator.asm.x86_64 storage.modifier.asm.x86_64"},2:{name:"entity.name.function.asm.x86_64"},3:{name:"punctuation.separator.asm.x86_64"}},match:"(\\.)([0-9]+(?:[[:alnum:]_$#@~.?]*))(?:(\\:)?|\\b)",name:"entity.name.function.asm.x86_64"},{captures:{1:{name:"punctuation.separator.asm.x86_64 storage.modifier.asm.x86_64"},2:{name:"invalid.illegal.entity.name.function.asm.x86_64"},3:{name:"punctuation.separator.asm.x86_64"}},match:"(?:(\\.)?|\\b)([0-9$@~](?:[[:alnum:]_$#@~.?]*))(?:(\\:))",name:"invalid.illegal.entity.name.function.asm.x86_64"}]},mnemonics:{patterns:[{include:"#mnemonics-general-purpose"},{include:"#mnemonics-fpu"},{include:"#mnemonics-mmx"},{include:"#mnemonics-sse"},{include:"#mnemonics-sse2"},{include:"#mnemonics-sse3"},{include:"#mnemonics-sse4"},{include:"#mnemonics-aesni"},{include:"#mnemonics-avx"},{include:"#mnemonics-avx2"},{include:"#mnemonics-tsx"},{include:"#mnemonics-sha"},{include:"#mnemonics-avx512"},{include:"#mnemonics-system"},{include:"#mnemonics-64bit"},{include:"#mnemonics-vmx"},{include:"#mnemonics-smx"},{include:"#mnemonics-mpx"},{include:"#mnemonics-sgx"},{include:"#mnemonics-cet"},{include:"#mnemonics-amx"},{include:"#mnemonics-uirq"},{include:"#mnemonics-esi"},{include:"#mnemonics-intel-manual-listing"},{include:"#mnemonics-intel-isa-xeon-phi"},{include:"#mnemonics-intel-isa-keylocker"},{include:"#mnemonics-supplemental-amd"},{include:"#mnemonics-supplemental-cyrix"},{include:"#mnemonics-supplemental-via"},{include:"#mnemonics-undocumented"},{include:"#mnemonics-future-intel"},{include:"#mnemonics-pseudo-ops"}]},"mnemonics-64bit":{patterns:[{match:"(?i)\\b(cdqe|cqo|(cmp|lod|mov|sto)sq|cmpxchg16b|mov(ntq|sxd)|scasq|swapgs|sys(call|ret))\\b",name:"keyword.operator.word.mnemonic.64-bit-mode"}]},"mnemonics-aesni":{patterns:[{match:"(?i)\\b(aes((dec|enc)(last)?|imc|keygenassist)|pclmulqdq)\\b",name:"keyword.operator.word.mnemonic.aesni"}]},"mnemonics-amx":{patterns:[{match:"(?i)\\b((ld|st)tilecfg|tdpb(f16ps|[su]{2}d)|tile(loadd(t1)?|release|stored|zero))\\b",name:"keyword.operator.word.mnemonic.amx"}]},"mnemonics-avx":{patterns:[{match:"(?i)\\b(v((test|permil|maskmov)p[ds]|zero(all|upper)|(perm2|insert|extract|broadcast)f128|broadcasts[ds]))\\b",name:"keyword.operator.word.mnemonic.avx"},{match:"(?i)\\b(vaes((dec|enc)(last)?|imc|keygenassist)|vpclmulqdq)\\b",name:"keyword.operator.word.mnemonic.avx.promoted.aes"},{match:"(?i)\\b(v((cmp[ps]|u?comis)[ds]|pcmp([ei]str[im]|(eq|gt)[bdqw])))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.comparison"},{match:"(?i)\\b(v(cvt(dq2pd|dq2ps|pd2ps|ps2pd|sd2ss|si2sd|si2ss|ss2sd|t?(pd2dq|ps2dq|sd2si|ss2si))))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.conversion"},{match:"(?i)\\b(vh((add|sub)p[ds])|vph((add|sub)([dw]|sw)|minposuw))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.horizontal-packed-arithmetic"},{match:"(?i)\\b(v((andn?|x?or)p[ds]))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.logical"},{match:"(?i)\\b(v(mov(([ahl]|msk|nt|u)p[ds]|(hl|lh)ps|s([ds]|[hl]dup)|q)))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.mov"},{match:"(?i)\\b(v((add|div|mul|sub|max|min|round|sqrt)[ps][ds]|(addsub|dp)p[ds]|(rcp|rsqrt)[ps]s))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.packed-arithmetic"},{match:"(?i)\\b(v(pack[su]s(dw|wb)|punpck[hl](bw|dq|wd|qdq)|unpck[hl]p[ds]))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.packed-conversion"},{match:"(?i)\\b(vp(shuf([bd]|[hl]w))|vshufp[ds])\\b",name:"keyword.operator.word.mnemonic.avx.promoted.packed-shuffle"},{match:"(?i)\\b(vp((abs|sign|(max|min)[su])[bdw]|(add|sub)([bdqw]|u?s[bw])|avg[bw]|extr[bdqw]|madd(wd|ubsw)|mul(hu?w|hrsw|l[dw]|u?dq)|sadbw))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.supplemental.arithmetic"},{match:"(?i)\\b(vp(andn?|x?or))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.supplemental.logical"},{match:"(?i)\\b(vpblend(vb|w))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.supplemental.blending"},{match:"(?i)\\b(vpmov(mskb|[sz]x(b[dqw]|w[dq]|dq)))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.supplemental.mov"},{match:"(?i)\\b(vp(insr[bdqw]|sll(dq|[dqw])|srl(dq)))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.simd-integer"},{match:"(?i)\\b(vp(sra[dwq]|srl[dqw]))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.shift-and-rotate"},{match:"(?i)\\b(vblendv?p[ds])\\b",name:"keyword.operator.word.mnemonic.avx.promoted.packed-blending"},{match:"(?i)\\b(vp(test|alignr))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.packed-other"},{match:"(?i)\\b(vmov(d(dup|qa|qu)?))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.simd-integer.mov"},{match:"(?i)\\b(v((extract|insert)ps|lddqu|(ld|st)mxcsr|mpsadbw))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.other"},{match:"(?i)\\b(v(maskmovdqu|movntdqa?))\\b",name:"keyword.operator.word.mnemonic.avx.promoted.cacheability-control"},{match:"(?i)\\b(vcvt(ph2ps|ps2ph))\\b",name:"keyword.operator.word.mnemonic.16-bit-floating-point-conversion"},{match:"(?i)\\b(vfn?m((add|sub)(132|213|231)[ps][ds])|vfm((addsub|subadd)(132|213|231)p[ds]))\\b",name:"keyword.operator.word.mnemonic.fma"}]},"mnemonics-avx2":{patterns:[{match:"(?i)\\b(v((broadcast|extract|insert|perm2)i128|pmaskmov[dq]|perm([dsq]|p[sd])))\\b",name:"keyword.operator.word.mnemonic.avx2.promoted.simd"},{match:"(?i)\\b(vpbroadcast[bdqw])\\b",name:"keyword.operator.word.mnemonic.avx2.promoted.packed"},{match:"(?i)\\b(vp(blendd|s[lr]lv[dq]|sravd))\\b",name:"keyword.operator.word.mnemonic.avx2.blend"},{match:"(?i)\\b(vp?gather[dq][dq]|vgather([dq]|dq)p[ds])\\b",name:"keyword.operator.word.mnemonic.avx2.gather"}]},"mnemonics-avx512":{patterns:[{include:"#mnemonics-avx512f"},{include:"#mnemonics-avx512dq"},{include:"#mnemonics-avx512bw"},{include:"#mnemonics-avx512-opmask"},{include:"#mnemonics-avx512er"},{include:"#mnemonics-avx512pf"},{include:"#mnemonics-avx512fp16"}]},"mnemonics-avx512-opmask":{patterns:[{match:"(?i)\\bk(add|andn?|mov|not|or(test)?|shift[lr]|test|xn?or)[bdqw]\\b",name:"keyword.operator.word.mnemonic.avx512.opmask"},{match:"(?i)\\bkunpck(bw|wd|dq)\\b",name:"keyword.operator.word.mnemonic.avx512.opmask.unpack"}]},"mnemonics-avx512bw":{patterns:[{match:"(?i)\\bv(dbpsadbw|movdqu(8|16))\\b",name:"keyword.operator.word.mnemonic.avx512.bw.dbpsad"},{match:"(?i)\\bvp(blendm|cmpu?|movm2)[bw]\\b",name:"keyword.operator.word.mnemonic.avx512.bw.pblend"},{match:"(?i)\\bvperm(w|i2[bw])\\b",name:"keyword.operator.word.mnemonic.avx512.bw.perpmi2"},{match:"(?i)\\bvp(mov([bw]2m|u?swb))\\b",name:"keyword.operator.word.mnemonic.avx512.bw.pmov"},{match:"(?i)\\bvp(s(ll|ra|rl)vw|testn?m[bw])\\b",name:"keyword.operator.word.mnemonic.avx512.bw.psll"},{match:"(?i)\\bvp(broadcastm(b2q|w2d)|(conflict|lzcnt)[dq])\\b",name:"keyword.operator.word.mnemonic.avx512.bw.broadcast"}]},"mnemonics-avx512dq":{patterns:[{match:"(?i)\\bvcvt(t?p[ds]2u?qq|uqq2p[ds])\\b",name:"keyword.operator.word.mnemonic.avx512.dq.cvt"},{match:"(?i)\\bv((extract|insert)[fi]64x2|(fpclass|range|reduce)[ps][ds])\\b",name:"keyword.operator.word.mnemonic.avx512.dq.extract"},{match:"(?i)\\bvp(mov(m2[dq]|b2d|q2m)|mullq)\\b",name:"keyword.operator.word.mnemonic.avx512.dq.pmov"}]},"mnemonics-avx512er":{patterns:[{match:"(?i)\\bv(exp2|rcp28|rsqrt28)[ps][ds]\\b",name:"keyword.operator.word.mnemonic.avx512.er"}]},"mnemonics-avx512f":{patterns:[{match:"(?i)\\bv(align[dq]|(blendm|compress)p[ds])\\b",name:"keyword.operator.word.mnemonic.avx512.f.align"},{match:"(?i)\\bv(cvtt?[ps][ds]2u(dq|si))\\b",name:"keyword.operator.word.mnemonic.avx512.f.cvtt"},{match:"(?i)\\bv(cvt((q|ud)q2p|usi2s)[ds])\\b",name:"keyword.operator.word.mnemonic.avx512.f.cvt"},{match:"(?i)\\bv(expandp[ds]|extract[fi](32|64)x4|fixupimm[ps][ds])\\b",name:"keyword.operator.word.mnemonic.avx512.f.expand"},{match:"(?i)\\bv(get(exp|mant)[ps][ds]|insertf(32|64)x4|movdq[au](32|64))\\b",name:"keyword.operator.word.mnemonic.avx512.f.getexp"},{match:"(?i)\\bvp(blendm[dq]|cmpu?[dq]|compress[dq])\\b",name:"keyword.operator.word.mnemonic.avx512.f.pblend"},{match:"(?i)\\bvp(erm[it]2(d|q|p[ds])|expand[dq]|(max|min)[su]q|movu?s(q[bdw]|d[bw]))\\b",name:"keyword.operator.word.mnemonic.avx512.f.permi"},{match:"(?i)\\bvp(rolv?|rorr?|scatter[dq]|testn?m|terlog)[dq]\\b",name:"keyword.operator.word.mnemonic.avx512.f.prol"},{match:"(?i)\\bvpsravq\\b",name:"keyword.operator.word.mnemonic.avx512.f.sravq"},{match:"(?i)\\bv(rcp14|(rnd)?scale|rsqrt14)[ps][ds]\\b",name:"keyword.operator.word.mnemonic.avx512.f.rcp"},{match:"(?i)\\bv(scatter[dq]{2}|shuf[fi](32|64)x[24])\\b",name:"keyword.operator.word.mnemonic.avx512.f.scatter"}]},"mnemonics-avx512fp16":{patterns:[{match:"(?i)\\bv((add|cmp|div|fc?(madd|mul)c|fpclass|get(exp|mant)|mul|rcp|reduce|(rnd)?scale|r?sqrt|sub)[ps]h|u?comish)\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.add"},{match:"(?i)\\bvcvt(u?([dq]q|w)|pd)2ph\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.cvtx2ph"},{match:"(?i)\\bvcvtph2(u?([dq]q|w)|pd)\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.cvtph2x"},{match:"(?i)\\bvcvt(ph2psx|ps2phx)\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.cvtx"},{match:"(?i)\\bvcvt(s[dsi]|usi)2sh\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.cvtx2sh"},{match:"(?i)\\bvcvtsh2(s[dsi]|usi)\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.cvtsh2x"},{match:"(?i)\\bvcvtt(ph2(u?(dq|qq|w))|sh2u?si)\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.cvttph2x"},{match:"(?i)\\bvfn?m((add|sub)(132|213|231))[ps]h\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.fmadd"},{match:"(?i)\\bvfm(addsub|subadd)(132|213|231)ph\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.fmaddsub"},{match:"(?i)\\bv((min|max)ph|mov(sh|w))\\b",name:"keyword.operator.word.mnemonic.avx512.fp16.max"}]},"mnemonics-avx512pf":{patterns:[{match:"(?i)\\bv(gather|scatter)pf[01][dq]p[ds]\\b",name:"keyword.operator.word.mnemonic.avx512.pf"}]},"mnemonics-cet":{patterns:[{match:"(?i)\\b((inc|save(prev)?|rstor|rd)ssp|wru?ss|(set|clr)ssbsy|endbr(32|64))\\b",name:"keyword.operator.word.mnemonic.cet"},{match:"(?i)\\bendbranch\\b",name:"keyword.operator.word.mnemonic.cet.misc"}]},"mnemonics-esi":{patterns:[{match:"(?i)\\benqcmds?\\b",name:"keyword.operator.word.mnemonic.esi"}]},"mnemonics-fpu":{patterns:[{match:"(?i)\\b(fcmov(n?([beu]|be)))\\b",name:"keyword.operator.word.mnemonic.fpu.data-transfer.mov"},{match:"(?i)\\b(f(i?(ld|stp?)|b(ld|stp)|xch))\\b",name:"keyword.operator.word.mnemonic.fpu.data-transfer.other"},{match:"(?i)\\b(f((add|div|mul|sub)p?|i(add|div|mul|sub)|(div|sub)rp?|i(div|sub)r))\\b",name:"keyword.operator.word.mnemonic.fpu.basic-arithmetic.basic"},{match:"(?i)\\b(f(prem1?|abs|chs|rndint|scale|sqrt|xtract))\\b",name:"keyword.operator.word.mnemonic.fpu.basic-arithmetic.other"},{match:"(?i)\\b(f(u?com[ip]?p?|icomp?|tst|xam))\\b",name:"keyword.operator.word.mnemonic.fpu.comparison"},{match:"(?i)\\b(f(sin|cos|sincos|pa?tan|2xm1|yl2x(p1)?))\\b",name:"keyword.operator.word.mnemonic.fpu.transcendental"},{match:"(?i)\\b(fld(1|z|pi|l2[et]|l[ng]2))\\b",name:"keyword.operator.word.mnemonic.fpu.load-constants"},{match:"(?i)\\b(f((inc|dec)stp|free|n?(init|clex|st[cs]w|stenv|save)|ld(cw|env)|rstor|nop)|f?wait)\\b",name:"keyword.operator.word.mnemonic.fpu.control-management"},{match:"(?i)\\b(fx(save|rstor)(64)?)\\b",name:"keyword.operator.word.mnemonic.fpu.state-management"}]},"mnemonics-future-intel":{patterns:[{include:"#mnemonics-future-intel-apx"}]},"mnemonics-future-intel-apx":{patterns:[{match:"(?i)\\b(c(cmp|test)(n?[bl]e?|[ft]|n?[osz]))\\b",name:"keyword.operator.word.mnemonic.apx.ccmp_test"},{match:"(?i)\\b(cfcmovn?([bl]e?|[opsz]))\\b",name:"keyword.operator.word.mnemonic.apx.cfcmov"},{match:"(?i)\\b(cmpn?([bl]e?|[opsz])xadd)\\b",name:"keyword.operator.word.mnemonic.apx.cmpxadd"},{match:"(?i)\\b(jmpabs|(push|pop)2p?)\\b",name:"keyword.operator.word.mnemonic.apx.other"}]},"mnemonics-general-purpose":{patterns:[{match:"(?i)\\b(?:mov(?:[sz]x)?|cmov(?:n?[abceglopsz]|n?[abgl]e|p[eo]))\\b",name:"keyword.operator.word.mnemonic.general-purpose.data-transfer.mov"},{match:"(?i)\\b(xchg|bswap|xadd|cmpxchg(8b)?)\\b",name:"keyword.operator.word.mnemonic.general-purpose.data-transfer.xchg"},{match:"(?i)\\b((push|pop)(ad?)?|cwde?|cdq|cbw)\\b",name:"keyword.operator.word.mnemonic.general-purpose.data-transfer.other"},{match:"(?i)\\b(adcx?|adox|add|sub|sbb|i?mul|i?div|inc|dec|neg|cmp)\\b",name:"keyword.operator.word.mnemonic.general-purpose.binary-arithmetic"},{match:"(?i)\\b(daa|das|aaa|aas|aam|aad)\\b",name:"keyword.operator.word.mnemonic.general-purpose.decimal-arithmetic"},{match:"(?i)\\b(and|x?or|not)\\b",name:"keyword.operator.word.mnemonic.general-purpose.logical"},{match:"(?i)\\b(s[ah][rl]|sh[rl]d|r[co][rl])\\b",name:"keyword.operator.word.mnemonic.general-purpose.rotate"},{match:"(?i)\\b(set(n?[abceglopsz]|n?[abgl]e|p[eo]))\\b",name:"keyword.operator.word.mnemonic.general-purpose.bit-and-byte.set"},{match:"(?i)\\b(bt[crs]?|bs[fr]|test|crc32|popcnt)\\b",name:"keyword.operator.word.mnemonic.general-purpose.bit-and-byte.other"},{match:"(?i)\\b(jmp|jn?[abceglopsz]|jn?[abgl]e|jp[eo]|j[er]?cxz)\\b",name:"keyword.operator.word.mnemonic.general-purpose.control-transfer.jmp"},{match:"(?i)\\b(loop(n?[ez])?|call|ret|iret[dq]?|into?|bound|enter|leave)\\b",name:"keyword.operator.word.mnemonic.general-purpose.control-transfer.other"},{match:"(?i)\\b((mov|cmp|sca|lod|sto)(s[bdw]?)|rep(n?[ez])?)\\b",name:"keyword.operator.word.mnemonic.general-purpose.strings"},{match:"(?i)\\b((in|out)(s[bdw]?)?)\\b",name:"keyword.operator.word.mnemonic.general-purpose.io"},{match:"(?i)\\b((st|cl)[cdi]|cmc|[ls]ahf|(push|pop)f[dq]?)\\b",name:"keyword.operator.word.mnemonic.general-purpose.flag-control"},{match:"(?i)\\b(l[defgs]s)\\b",name:"keyword.operator.word.mnemonic.general-purpose.segment-registers"},{match:"(?i)\\b(lea|nop|ud2?|xlatb?|cpuid|movbe)\\b",name:"keyword.operator.word.mnemonic.general-purpose.misc"},{match:"(?i)\\b(cl(flush(opt)?|demote|wb)|pcommit)\\b",name:"keyword.operator.word.mnemonic.general-purpose.cache-control"},{match:"(?i)\\b(rdrand|rdseed)\\b",name:"keyword.operator.word.mnemonic.general-purpose.rng"},{match:"(?i)\\b(andn|bextr|bls(i|r|msk)|bzhi|pdep|pext|[lt]zcnt|(mul|ror|sar|shl|shr)x)\\b",name:"keyword.operator.word.mnemonic.general-purpose.bmi"}]},"mnemonics-intel-isa-keylocker":{patterns:[{match:"(?i)\\b(aes(enc|dec)(wide)?(128|256)kl|encodekey(128|256)|loadiwkey)\\b",name:"keyword.operator.word.mnemonic.keylocker"}]},"mnemonics-intel-isa-xeon-phi":{patterns:[{match:"(?i)\\bv(4fn?(madd)[ps]s|p4dpwssds?)\\b",name:"keyword.operator.word.mnemonic.xeon-phi"}]},"mnemonics-intel-manual-listing":{patterns:[{match:"(?i)\\bcvtt?pd1pi\\b",name:"keyword.operator.word.mnemonic.other.c"},{match:"(?i)\\bv?gf2p8(affine(inv)?q|mul)b\\b",name:"keyword.operator.word.mnemonic.other.g"},{match:"(?i)\\bhreset\\b",name:"keyword.operator.word.mnemonic.other.h"},{match:"(?i)\\bincssp[dq]\\b",name:"keyword.operator.word.mnemonic.other.i"},{match:"(?i)\\bmovdir(i|64b)\\b",name:"keyword.operator.word.mnemonic.other.m"},{match:"(?i)\\bp((abs|(max|min)[su]?|mull|sra)q|config|twrite)\\b",name:"keyword.operator.word.mnemonic.other.p"},{match:"(?i)\\brd(pid|ssp[dq])\\b",name:"keyword.operator.word.mnemonic.other.r"},{match:"(?i)\\bserialize\\b",name:"keyword.operator.word.mnemonic.other.s"},{match:"(?i)\\btpause\\b",name:"keyword.operator.word.mnemonic.other.t"},{match:"(?i)\\bu(monitor|mwait)\\b",name:"keyword.operator.word.mnemonic.other.u"},{match:"(?i)\\bvbroadcast[fi](32x[248]|64x[24])\\b",name:"keyword.operator.word.mnemonic.other.vb"},{match:"(?i)\\bv(compressw|cvtne2?ps2bf16)\\b",name:"keyword.operator.word.mnemonic.other.vc"},{match:"(?i)\\bvdpbf16ps\\b",name:"keyword.operator.word.mnemonic.other.vd"},{match:"(?i)\\bvextract[fi]32x8\\b",name:"keyword.operator.word.mnemonic.other.ve"},{match:"(?i)\\bv(insert([fi]32x8|i(32|64)x4))\\b",name:"keyword.operator.word.mnemonic.other.vi"},{match:"(?i)\\bv(maskmov|(max|min)sh)\\b",name:"keyword.operator.word.mnemonic.other.vm"},{match:"(?i)\\bvp((2intersect|andn?)[dq]|absq)\\b",name:"keyword.operator.word.mnemonic.other.vpa"},{match:"(?i)\\bvpbroadcasti32x4\\b",name:"keyword.operator.word.mnemonic.other.vpb"},{match:"(?i)\\bvpcompress[bw]\\b",name:"keyword.operator.word.mnemonic.other.vpc"},{match:"(?i)\\bvp(dp(bu|ws)sds?)\\b",name:"keyword.operator.word.mnemonic.other.vpd"},{match:"(?i)\\b(vperm(b|t2[bw])|vp(expand[bw]|extrtd))\\b",name:"keyword.operator.word.mnemonic.other.vpe"},{match:"(?i)\\bvp(madd52[hl]uq|mov(d(2m|[bw])|q[bdw]|wb)|mpov[bdqw]2m|multishiftqb)\\b",name:"keyword.operator.word.mnemonic.other.vpm"},{match:"(?i)\\b(vpopcnt[bdqw]|vpor[dq])\\b",name:"keyword.operator.word.mnemonic.other.vpo"},{match:"(?i)\\bvprorv[dq]\\b",name:"keyword.operator.word.mnemonic.other.vpr"},{match:"(?i)\\bvp(sh[lr]dv?[dqw]|shufbitqmb|shufps)\\b",name:"keyword.operator.word.mnemonic.other.vps"},{match:"(?i)\\bvpternlog[dq]\\b",name:"keyword.operator.word.mnemonic.other.vpt"},{match:"(?i)\\bvpxor[dq]\\b",name:"keyword.operator.word.mnemonic.other.vpx"},{match:"(?i)\\bv(scalef[ps][dhs]|scatter[dq]p[ds])\\b",name:"keyword.operator.word.mnemonic.other.vs"},{match:"(?i)\\b(wbnoinvd|wru?ss[dq])\\b",name:"keyword.operator.word.mnemonic.other.w"}]},"mnemonics-invalid":{patterns:[{include:"#mnemonics-invalid-amd-sse5"}]},"mnemonics-invalid-amd-sse5":{patterns:[{match:"(?i)\\b(com[ps][ds]|pcomu?[bdqw])\\b",name:"invalid.keyword.operator.word.mnemonic.sse5.comparison"},{match:"(?i)\\b(cvtp(h2ps|s2ph)|frcz[ps][ds])\\b",name:"invalid.keyword.operator.word.mnemonic.sse5.conversion"},{match:"(?i)\\b(fn?m((add|sub)[ps][ds])|ph(addu?(b[dqw]|w[dq]|dq)|sub(bw|dq|wd))|pma(css?(d(d|q[hl])|w[dw])|dcss?wd))\\b",name:"invalid.keyword.operator.word.mnemonic.sse5.packed-arithmetic"},{match:"(?i)\\b(pcmov|permp[ds]|pperm|prot[bdqw]|psh[al][bdqw])\\b",name:"invalid.keyword.operator.word.mnemonic.sse5.simd-integer"}]},"mnemonics-mmx":{patterns:[{match:"(?i)\\b(mov[dq])\\b",name:"keyword.operator.word.mnemonic.mmx.data-transfer"},{match:"(?i)\\b(pack(ssdw|[su]swb)|punpck[hl](bw|dq|wd))\\b",name:"keyword.operator.word.mnemonic.mmx.conversion"},{match:"(?i)\\b(p(((add|sub)(d|(u?s)?[bw]))|maddwd|mul[lh]w))\\b",name:"keyword.operator.word.mnemonic.mmx.packed-arithmetic"},{match:"(?i)\\b(pcmp((eq|gt)[bdw]))\\b",name:"keyword.operator.word.mnemonic.mmx.comparison"},{match:"(?i)\\b(pandn?|px?or)\\b",name:"keyword.operator.word.mnemonic.mmx.logical"},{match:"(?i)\\b(ps([rl]l[dwq]|raw|rad))\\b",name:"keyword.operator.word.mnemonic.mmx.shift-and-rotate"},{match:"(?i)\\b(emms)\\b",name:"keyword.operator.word.mnemonic.mmx.state-management"}]},"mnemonics-mpx":{patterns:[{match:"(?i)\\b(bnd(mk|c[lnu]|mov|ldx|stx))\\b",name:"keyword.operator.word.mnemonic.mpx"}]},"mnemonics-pseudo-ops":{patterns:[{match:"(?i)\\b(cmp(n?(eq|lt|le)|(un)?ord)[ps][ds])\\b",name:"keyword.operator.word.pseudo-mnemonic.sse2.compare"},{match:"(?i)\\b(v?pclmul([hl]q[hl]q|[hl]qh)dq)\\b",name:"keyword.operator.word.pseudo-mnemonic.avx.promoted.aes"},{match:"(?i)\\b(vcmp(eq(_(os|uq|us))?|neq(_(oq|os|us))?|[gl][et](_oq)?|n[gl][et](_uq)?|(un)?ord(_s)?|false(_os)?|true(_us)?)[ps][ds])\\b",name:"keyword.operator.word.pseudo-mnemonic.avx.promoted.comparison"},{match:"(?i)\\bvp(cmpn?(eq|le|lt))\\b",name:"keyword.operator.word.pseudo-mnemonic.avx512.compare"},{match:"(?i)\\b(vpcom(n?eq|[gl][et]|false|true)(b|uw))\\b",name:"keyword.operator.word.pseudo-mnemonic.supplemental.amd.xop.simd"}]},"mnemonics-sgx":{patterns:[{match:"(?i)\\bencl[su]\\b",name:"keyword.operator.word.mnemonic.sgx"},{match:"(?i)\\be(add|block|create|dbg(rd|wr)|extend|init|ld[bu]|pa|remove|track|wb)\\b",name:"support.constant.sgx1.supervisor"},{match:"(?i)\\be(add|block|create|dbg(rd|wr)|extend|init|ld[bu]|pa|remove|track|wb)\\b",name:"support.constant.sgx1.supervisor"},{match:"(?i)\\be(enter|exit|getkey|report|resume)\\b",name:"support.constant.sgx1.user"},{match:"(?i)\\be(aug|mod(pr|t))\\b",name:"support.constant.sgx2.supervisor"},{match:"(?i)\\be(accept(copy)?|modpe)\\b",name:"support.constant.sgx2.user"}]},"mnemonics-sha":{patterns:[{match:"(?i)\\b(sha(1rnds4|256rnds2|1nexte|(1|256)msg[12]))\\b",name:"keyword.operator.word.mnemonic.sha"}]},"mnemonics-smx":{patterns:[{match:"(?i)\\b(getsec)\\b",name:"keyword.operator.word.mnemonic.smx.getsec"},{match:"(?i)\\b(capabilities|enteraccs|exitac|senter|sexit|parameters|smctrl|wakeup)\\b",name:"support.constant.smx"}]},"mnemonics-sse":{patterns:[{match:"(?i)\\b(mov(([ahlu]|hl|lh|msk)ps|ss))\\b",name:"keyword.operator.word.mnemonic.sse.data-transfer"},{match:"(?i)\\b((add|div|max|min|mul|rcp|r?sqrt|sub)[ps]s)\\b",name:"keyword.operator.word.mnemonic.sse.packed-arithmetic"},{match:"(?i)\\b(cmp[ps]s|u?comiss)\\b",name:"keyword.operator.word.mnemonic.sse.comparison"},{match:"(?i)\\b((andn?|x?or)ps)\\b",name:"keyword.operator.word.mnemonic.sse.logical"},{match:"(?i)\\b((shuf|unpck[hl])ps)\\b",name:"keyword.operator.word.mnemonic.sse.shuffle-and-unpack"},{match:"(?i)\\b(cvt(pi2ps|si2ss|ps2pi|tps2pi|ss2si|tss2si))\\b",name:"keyword.operator.word.mnemonic.sse.conversion"},{match:"(?i)\\b((ld|st)mxcsr)\\b",name:"keyword.operator.word.mnemonic.sse.state-management"},{match:"(?i)\\b(p(avg[bw]|extrw|insrw|(max|min)(sw|ub)|sadbw|shufw|mulhuw|movmskb))\\b",name:"keyword.operator.word.mnemonic.sse.simd-integer"},{match:"(?i)\\b(maskmovq|movntps|sfence)\\b",name:"keyword.operator.word.mnemonic.sse.cacheability-control"},{match:"(?i)\\b(prefetch(nta|t[0-2]|w(t1)?))\\b",name:"keyword.operator.word.mnemonic.sse.prefetch"}]},"mnemonics-sse2":{patterns:[{match:"(?i)\\b(mov([auhl]|msk)pd)\\b",name:"keyword.operator.word.mnemonic.sse2.data-transfer"},{match:"(?i)\\b((add|div|max|min|mul|sub|sqrt)[ps]d)\\b",name:"keyword.operator.word.mnemonic.sse2.packed-arithmetic"},{match:"(?i)\\b((andn?|x?or)pd)\\b",name:"keyword.operator.word.mnemonic.sse2.logical"},{match:"(?i)\\b((cmpp|u?comis)d)\\b",name:"keyword.operator.word.mnemonic.sse2.compare"},{match:"(?i)\\b((shuf|unpck[hl])pd)\\b",name:"keyword.operator.word.mnemonic.sse2.shuffle-and-unpack"},{match:"(?i)\\b(cvt(dq2pd|pi2pd|ps2pd|pd2ps|si2sd|sd2ss|ss2sd|t?(pd2dq|pd2pi|sd2si)))\\b",name:"keyword.operator.word.mnemonic.sse2.conversion"},{match:"(?i)\\b(cvt(dq2ps|ps2dq|tps2dq))\\b",name:"keyword.operator.word.mnemonic.sse2.packed-floating-point"},{match:"(?i)\\b(mov(dq[au]|q2dq|dq2q))\\b",name:"keyword.operator.word.mnemonic.sse2.simd-integer.mov"},{match:"(?i)\\b(p((add|sub|(s[lr]l|mulu|unpck[hl]q)d)q|shuf(d|[hl]w)))\\b",name:"keyword.operator.word.mnemonic.sse2.simd-integer.other"},{match:"(?i)\\b([lm]fence|pause|maskmovdqu|movnt(dq|i|pd))\\b",name:"keyword.operator.word.mnemonic.sse2.cacheability-control"}]},"mnemonics-sse3":{patterns:[{match:"(?i)\\b(fisttp|lddqu|(addsub|h(add|sub))p[sd]|mov(sh|sl|d)dup|monitor|mwait)\\b",name:"keyword.operator.word.mnemonic.sse3"},{match:"(?i)\\b(ph(add|sub)(s?w|d))\\b",name:"keyword.operator.word.mnemonic.sse3.supplimental.horizontal-packed-arithmetic"},{match:"(?i)\\b(p((abs|sign)[bdw]|maddubsw|mulhrsw|shufb|alignr))\\b",name:"keyword.operator.word.mnemonic.sse3.supplimental.other"}]},"mnemonics-sse4":{patterns:[{match:"(?i)\\b(pmul(ld|dq)|dpp[ds])\\b",name:"keyword.operator.word.mnemonic.sse4.1.arithmetic"},{match:"(?i)\\b(movntdqa)\\b",name:"keyword.operator.word.mnemonic.sse4.1.load-hint"},{match:"(?i)\\b(blendv?p[ds]|pblend(vb|w))\\b",name:"keyword.operator.word.mnemonic.sse4.1.packed-blending"},{match:"(?i)\\b(p(min|max)(u[dw]|s[bd]))\\b",name:"keyword.operator.word.mnemonic.sse4.1.packed-integer"},{match:"(?i)\\b(round[ps][sd])\\b",name:"keyword.operator.word.mnemonic.sse4.1.packed-floating-point"},{match:"(?i)\\b((extract|insert)ps|p((ins|ext)(r[bdq])))\\b",name:"keyword.operator.word.mnemonic.sse4.1.insertion-and-extraction"},{match:"(?i)\\b(pmov([sz]x(b[dqw]|dq|wd|wq)))\\b",name:"keyword.operator.word.mnemonic.sse4.1.conversion"},{match:"(?i)\\b(mpsadbw|phminposuw|ptest|pcmpeqq|packusdw)\\b",name:"keyword.operator.word.mnemonic.sse4.1.other"},{match:"(?i)\\b(pcmp([ei]str[im]|gtq))\\b",name:"keyword.operator.word.mnemonic.sse4.2"}]},"mnemonics-supplemental-amd":{patterns:[{match:"(?i)\\b(bl([cs](fill|ic?|msk)|cs)|t1mskc|tzmsk)\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.general-purpose"},{match:"(?i)\\b(clgi|int3|invlpga|iretw|skinit|stgi|vm(load|mcall|run|save)|monitorx|mwaitx)\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.system"},{match:"(?i)\\b([ls]lwpcb|lwp(ins|val))\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.profiling"},{match:"(?i)\\b(movnts[ds])\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.memory-management"},{match:"(?i)\\b(prefetch|clzero)\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.cache-management"},{match:"(?i)\\b((extr|insert)q)\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.sse4.a"},{match:"(?i)\\b(vfn?m((add|sub)[ps][ds])|vfm((addsub|subadd)p[ds]))\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.fma4"},{match:"(?i)\\b(vp(cmov|(comu?|rot|sh[al])[bdqw]|mac(s?s(d(d|q[hl])|w[dw]))|madcss?wd|perm))\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.xop.simd"},{match:"(?i)\\b(vph(addu?(b[dqw]|w[dq]|dq)|sub(bw|dq|wd)))\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.xop.simd-horizontal"},{match:"(?i)\\b(vfrcz[ps][ds]|vpermil2p[ds])\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.xop.other"},{match:"(?i)\\b(femms)\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.3dnow"},{match:"(?i)\\b(p(avgusb|(f2i|i2f)[dw]|mulhrw|swapd)|pf((p?n)?acc|add|max|min|mul|rcp(it[12])?|rsqit1|rsqrt|subr?))\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.3dnow.simd"},{match:"(?i)\\b(pfcmp(eq|ge|gt))\\b",name:"keyword.operator.word.mnemonic.supplemental.amd.3dnow.comparison"}]},"mnemonics-supplemental-cyrix":{patterns:[{match:"(?i)\\b((sv|rs)dc|(wr|rd)shr|paddsiw)\\b",name:"keyword.operator.word.mnemonic.supplemental.cyrix"}]},"mnemonics-supplemental-via":{patterns:[{match:"(?i)\\b(montmul)\\b",name:"keyword.operator.word.mnemonic.supplemental.via"},{match:"(?i)\\b(x(store(rng)?|crypt(ecb|cbc|ctr|cfb|ofb)|sha(1|256)))\\b",name:"keyword.operator.word.mnemonic.supplemental.via.padlock"}]},"mnemonics-system":{patterns:[{match:"(?i)\\b((cl|st)ac|[ls]([gli]dt|tr|msw)|clts|arpl|lar|lsl|ver[rw]|inv(d|lpg|pcid)|wbinvd)\\b",name:"keyword.operator.word.mnemonic.system"},{match:"(?i)\\b(lock|hlt|rsm|(rd|wr)(msr|pkru|[fg]sbase)|rd(pmc|tscp?)|sys(enter|exit))\\b",name:"keyword.operator.word.mnemonic.system"},{match:"(?i)\\b(x((save(c|opt|s)?|rstors?)(64)?|[gs]etbv))\\b",name:"keyword.operator.word.mnemonic.system"}]},"mnemonics-tsx":{patterns:[{match:"(?i)\\b(x(abort|begin|end|test|(res|sus)ldtrk))\\b",name:"keyword.operator.word.mnemonic.tsx"}]},"mnemonics-uirq":{patterns:[{match:"(?i)\\b((cl|st|test)ui|senduipi|uiret)\\b",name:"keyword.operator.word.mnemonic.uirq"}]},"mnemonics-undocumented":{patterns:[{match:"(?i)\\b(ret[nf]|icebp|int1|int03|smi|ud1)\\b",name:"keyword.operator.word.mnemonic.undocumented"}]},"mnemonics-vmx":{patterns:[{match:"(?i)\\b(vm(ptr(ld|st)|clear|read|write|launch|resume|xo(ff|n)|call|func)|inv(ept|vpid))\\b",name:"keyword.operator.word.mnemonic.vmx"}]},preprocessor:{patterns:[{begin:"^\\s*[#%]\\s*(error|warning)\\b",captures:{1:{name:"keyword.control.import.error.c"}},end:"$",name:"meta.preprocessor.diagnostic.c",patterns:[{match:"(?>\\\\\\s*\\n)",name:"punctuation.separator.continuation.c"}]},{begin:"^\\s*[#%]\\s*(include|import)\\b\\s+",captures:{1:{name:"keyword.control.import.include.c"}},end:"(?=(?://|/\\*))|$",name:"meta.preprocessor.c.include",patterns:[{match:"(?>\\\\\\s*\\n)",name:"punctuation.separator.continuation.c"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.c"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.c"}},name:"string.quoted.double.include.c"},{begin:"<",beginCaptures:{0:{name:"punctuation.definition.string.begin.c"}},end:">",endCaptures:{0:{name:"punctuation.definition.string.end.c"}},name:"string.quoted.other.lt-gt.include.c"}]},{begin:"^\\s*[%#]\\s*(i?x?define|defined|elif(def)?|else|i[fs]n?(?:def|macro|ctx|idni?|id|num|str|token|empty|env)?|line|(i|end|uni?)?macro|pragma|endif)\\b",captures:{1:{name:"keyword.control.import.c"}},end:"(?=(?://|/\\*))|$",name:"meta.preprocessor.c",patterns:[{match:"(?>\\\\\\s*\\n)",name:"punctuation.separator.continuation.c"},{include:"#preprocessor-functions"}]},{begin:"^\\s*[#%]\\s*(assign|strlen|substr|(end|exit)?rep|push|pop|rotate|use|ifusing|ifusable|def(?:ailas|str|tok)|undef(?:alias)?)\\b",captures:{1:{name:"keyword.control"}},end:"$",name:"meta.preprocessor.nasm",patterns:[{match:"(?>\\\\\\s*\\n)",name:"punctuation.separator.continuation.c"},{include:"#preprocessor-functions"}]}]},"preprocessor-functions":{patterns:[{begin:"((%)(?:(abs|cond|count|eval|isn?(?:def|macro|ctx|idni?|id|num|str|token|empty|env)?|num|sel|str(?:cat|len)?|substr|tok)\\s*(\\()))",captures:{3:{name:"support.function.preprocessor.asm.x86_64"}},end:"(\\))|$",name:"meta.preprocessor.function.asm.x86_64",patterns:[{include:"#preprocessor-functions"}]}]},registers:{patterns:[{match:"(?i)\\b(?:[abcd][hl]|[er]?[abcd]x|[er]?(?:di|si|bp|sp)|dil|sil|bpl|spl|r(?:8|9|1[0-5])[bdlw]?)\\b",name:"constant.language.register.general-purpose.asm.x86_64"},{match:"(?i)\\b(?:[cdefgs]s)\\b",name:"constant.language.register.segment.asm.x86_64"},{match:"(?i)\\b(?:[er]?flags)\\b",name:"constant.language.register.flags.asm.x86_64"},{match:"(?i)\\b(?:[er]?ip)\\b",name:"constant.language.register.instruction-pointer.asm.x86_64"},{match:"(?i)\\b(?:cr[02-4])\\b",name:"constant.language.register.control.asm.x86_64"},{match:"(?i)\\b(?:(?:mm|st|fpr)[0-7])\\b",name:"constant.language.register.mmx.asm.x86_64"},{match:"(?i)\\b(?:[xy]mm(?:[0-9]|1[0-5])|mxcsr)\\b",name:"constant.language.register.sse_avx.asm.x86_64"},{match:"(?i)\\b(?:zmm(?:[12]?[0-9]|30|31))\\b",name:"constant.language.register.avx512.asm.x86_64"},{match:"(?i)\\b(?:bnd(?:[0-3]|cfg[su]|status))\\b",name:"constant.language.register.memory-protection.asm.x86_64"},{match:"(?i)\\b(?:(?:[gil]dt)r?|tr)\\b",name:"constant.language.register.system-table-pointer.asm.x86_64"},{match:"(?i)\\b(?:dr[0-367])\\b",name:"constant.language.register.debug.asm.x86_64"},{match:"(?i)\\b(?:cr8|dr(?:[89]|1[0-5])|efer|tpr|syscfg)\\b",name:"constant.language.register.amd.asm.x86_64"},{match:"(?i)\\b(?:db[0-367]|t[67]|tr[3-7]|st)\\b",name:"invalid.deprecated.constant.language.register.asm.x86_64"},{match:"(?i)\\b[xy]mm(?:1[6-9]|2[0-9]|3[01])\\b",name:"constant.language.register.general-purpose.alias.asm.x86_64"}]},strings:{patterns:[{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.asm"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.asm"}},name:"string.quoted.double.asm",patterns:[{include:"#string_escaped_char"},{include:"#string_placeholder"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.asm"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.asm"}},name:"string.quoted.single.asm",patterns:[{include:"#string_escaped_char"},{include:"#string_placeholder"}]},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.asm"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.asm"}},name:"string.quoted.backquote.asm",patterns:[{include:"#string_escaped_char"},{include:"#string_placeholder"}]}]},support:{patterns:[{match:"(?i)\\b(?:s?byte|(?:[doqtyz]|dq|s[dq]?)?word|(?:d|res)[bdoqtwyz]|ddq)\\b",name:"storage.type.asm.x86_64"},{match:"(?i)\\b(?:incbin|equ|times|dup)\\b",name:"support.function.asm.x86_64"},{match:"(?i)\\b(?:strict|nosplit|near|far|abs|rel)\\b",name:"storage.modifier.asm.x86_64"},{match:"(?i)\\b(?:[ao](?:16|32|64))\\b",name:"storage.modifier.prefix.asm.x86_64"},{match:"(?i)\\b(?:rep(?:n?[ez])?|lock|xacquire|xrelease|(?:no)?bnd)\\b",name:"storage.modifier.prefix.asm.x86_64"},{captures:{1:{name:"storage.modifier.prefix.vex.asm.x86_64"}},match:"{(vex[23]?|evex|rex)}"},{captures:{1:{name:"storage.modifier.opmask.asm.x86_64"}},match:"{(k[1-7])}"},{captures:{1:{name:"storage.modifier.precision.asm.x86_64"}},match:"{(1to(?:8|16))}"},{captures:{1:{name:"storage.modifier.rounding.asm.x86_64"}},match:"{(z|(?:r[nudz]-)?sae)}"},{match:"\\.\\.(?:start|imagebase|tlvp|got(?:pc(?:rel)?|(?:tp)?off)?|plt|sym|tlsie)\\b",name:"support.constant.asm.x86_64"},{match:"\\b__\\?(?:utf(?:(?:16|32)(?:[lb]e)?)|float(?:8|16|32|64|80[me]|128[lh])|bfloat16|Infinity|[QS]?NaN)\\?__\\b",name:"support.function.asm.x86_64"},{match:"\\b__(?:utf(?:(?:16|32)(?:[lb]e)?)|float(?:8|16|32|64|80[me]|128[lh])|bfloat16|Infinity|[QS]?NaN)__\\b",name:"support.function.legacy.asm.x86_64"},{match:"\\b__\\?NASM_(?:MAJOR|(?:SUB)?MINOR|SNAPSHOT|VER(?:SION_ID)?)\\?__\\b",name:"support.function.asm.x86_64"},{match:"\\b___\\?NASM_PATCHLEVEL\\?__\\b",name:"support.function.asm.x86_64"},{match:"\\b__\\?(?:FILE|LINE|BITS|OUTPUT_FORMAT|DEBUG_FORMAT)\\?__\\b",name:"support.function.asm.x86_64"},{match:"\\b__\\?(?:(?:UTC_)?(?:DATE|TIME)(?:_NUM)?|POSIX_TIME)\\?__\\b",name:"support.function.asm.x86_64"},{match:"\\b__\\?USE_(?:\\w+)\\?__\\b",name:"support.function.asm.x86_64"},{match:"\\b__\\?PASS\\?__\\b",name:"invalid.deprecated.support.constant.altreg.asm.x86_64"},{match:"\\b__\\?ALIGNMODE\\?__\\b",name:"support.constant.smartalign.asm.x86_64"},{match:"\\b__\\?ALIGN_(\\w+)\\?__\\b",name:"support.function.smartalign.asm.x86_64"},{match:"\\b__NASM_(?:MAJOR|(?:SUB)?MINOR|SNAPSHOT|VER(?:SION_ID)?)__\\b",name:"support.function.asm.x86_64"},{match:"\\b___NASM_PATCHLEVEL__\\b",name:"support.function.asm.x86_64"},{match:"\\b__(?:FILE|LINE|BITS|OUTPUT_FORMAT|DEBUG_FORMAT)__\\b",name:"support.function.asm.x86_64"},{match:"\\b__(?:(?:UTC_)?(?:DATE|TIME)(?:_NUM)?|POSIX_TIME)__\\b",name:"support.function.asm.x86_64"},{match:"\\b__USE_(?:\\w+)__\\b",name:"support.function.asm.x86_64"},{match:"\\b__PASS__\\b",name:"invalid.deprecated.support.constant.altreg.asm.x86_64"},{match:"\\b__ALIGNMODE__\\b",name:"support.constant.smartalign.asm.x86_64"},{match:"\\b__ALIGN_(\\w+)__\\b",name:"support.function.smartalign.asm.x86_64"},{match:"\\b(?:Inf|[QS]?NaN)\\b",name:"support.constant.fp.asm.x86_64"},{match:"\\b(?:float(?:8|16|32|64|80[me]|128[lh]))\\b",name:"support.function.fp.asm.x86_64"},{match:"(?i)\\bilog2(?:[ewfc]|[fc]w)?\\b",name:"support.function.ifunc.asm.x86_64"}]}},scopeName:"source.asm.x86_64"});var n=[e];export{n as default};
