import { db } from '../models';
var Manager = db.models.Manager;

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function create(req, res) {
	console.log("manager ts create: " + req.body);
	Manager.create(req.body).then(function(manager){
    if(!manager) res.send(res, "not saved");
    else res.json(manager);
  });
}

function show(req, res){
  Manager.findById(req.params.id)
  .then(function(manager){
  	if(!manager) res.send(res, "not found");
  	else res.json(manager);
  })
}

function update(req, res){
  Manager.findById(req.params.id)
  .then(function(manager){
  	if(!manager) res.send(res, "not found");
  	else return manager.updateAttributes(req.body);
  })	
  .then(function(manager){
  	res.json(manager);
  })
}

function destroy(req, res){
	Manager.findById(req.params.id)
	.then(function(manager){
		if(!manager) res.send(res, "not found");
		else return manager.destroy();
	})
	.then (function(){
		res.redirect(303,"/managers");
	})
}

const managersController = <any>{};
managersController.index = index;
managersController.create = create;
managersController.show = show;
managersController.update = update;
managersController.destroy = destroy;

export {managersController};