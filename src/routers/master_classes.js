import { Router } from 'express';
import {
  getAllMasterClasses,
  getMasterClassById,
} from '../services/master_classes';

const router = Router();
router.get('/', async (req, res) => {
  const masterClasses = await getAllMasterClasses();

  res.status(200).json({
    data: masterClasses,
  });
});

router.get('/masterClasess/:masterClassId', async (req, res, next) => {
  const { masterClassId } = req.params;
  const masterClass = await getMasterClassById(masterClassId);

  if (!masterClass) {
    res.status(404).json({
      message: 'Master class not found',
    });
    return;
  }

  res.status(200).json({
    data: masterClass,
  });
});

export default router;
