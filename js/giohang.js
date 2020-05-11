var keyLocalStorageItemGioHang='danhSachItemGioHang';   

function layDanhSachItemGioHang(){
    var danhSachItemGioHang=new Array();
    var jsonDanhSachItemGioHang=localStorage.getItem(keyLocalStorageItemGioHang);

    if(jsonDanhSachItemGioHang!=null){
        danhSachItemGioHang=JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

function taoDoiTuongItemGioHang(idSanPham,soLuong){
    var itemGioHang=new Object();
    itemGioHang.idSanPham=idSanPham;
    itemGioHang.soLuong=soLuong;
    return itemGioHang;
}

function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang){
    var jsonDanhSachItemGioHang=JSON.stringify(danhSachItemGioHang);

    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang); 
}
function themSanPhamVaoGioHang(idSanPham,gioHang){
    var gioHangSauKhiDuocThem=gioHang;
    var itemGioHang=taoDoiTuongItemGioHang(idSanPham,1);

    gioHangSauKhiDuocThem.push(itemGioHang);
    return gioHangSauKhiDuocThem;
}

/* 
function layGioHangTuLocalStorage(){
    var gioHang =new Array();
    var jsonGioHang=localStorage.getItem('gioHang')

    if(jsonGioHang!=null){
        gioHang=JSON.parse(jsonGioHang);
    }
    return gioHang;
}

function themSanPhamVaoGioHang(idSanPham,gioHang){
    var gioHangSauKhiDuocThem=gioHang;
    var itemGioHang=taoDoiTuongItemGioHang(idSanPham,1);

    gioHangSauKhiDuocThem.push(itemGioHang);
    return gioHangSauKhiDuocThem;
}

function luuGioHangVaoLocalStorage(gioHang){
    var jsonGioHang=JSON.stringify(gioHang);
    localStorage.getItem('gioHang',jsonGioHang);
}
 */
