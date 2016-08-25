/**
 * 
 * @authors 
 * @links 
 * @date    2016-08-24 23:45:30
 * @version 0.0.1
 */


var App = {
	type: function (obj) {
		var toString = Object.prototype.toString;
		var map = {
		    '[object Boolean]'  : 'boolean', 
		    '[object Number]'   : 'number', 
		    '[object String]'   : 'string', 
		    '[object Function]' : 'function', 
		    '[object Array]'    : 'array', 
		    '[object Date]'     : 'date', 
		    '[object RegExp]'   : 'regExp', 
		    '[object Undefined]': 'undefined',
		    '[object Null]'     : 'null', 
		    '[object Object]'   : 'object'
		};
		return map[toString.call(obj)];
	},
	deepClone: function (data) {
		var t = this.type(data), o, i, ni;
		if(t === 'array') {
		    o = [];
		}else if( t === 'object') {
		    o = {};
		}else {
		    return data;
		}
		
		if(t === 'array') {
		    for (i = 0, ni = data.length; i < ni; i++) {
		        o.push(this.deepClone(data[i]));
		    }
		    return o;
		}else if( t === 'object') {
		    for( i in data) {
		        o[i] = this.deepClone(data[i]);
		    }
		    return o;
		}
	}
}


var obj1 = {
	a:12,
	b:34,
	c:[1,2,3,4,5,6,7,8],
	d:{
		a:12,
		b:34,
		c:[1,2,3,4,5,6,7,8],
		d:{
			a:12,
			b:34,
			c:[1,2,3,4,5,6,7,8],
			d:{
				d:{
					d:{
						d:{
							a:[1,2,3,4,5,6,7,8],
							b:function(){
								console.log('a')
							}
						}
					}
				}
			}
		}
	}
}


var obj3 = App.deepClone(obj1);
obj3.d.d.a = 4;
console.log(obj1)
